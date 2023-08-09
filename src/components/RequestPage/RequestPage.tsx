
import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { ToastContainer } from 'react-toastify';
import { QBTMediaRequest } from '../../types/qbt';
import MediaForm from "../../components/MediaForm/MediaForm"
import DownloadsDisplay from '../../components/DownloadsDisplay/DownloadsDisplay';
import { REACT_APP_TORR_API_ENDPOINT } from '../../env';
import "./RequestPage.css"
import { Movie, Show } from '../../types/tmdb';
import { PBMediaRequest } from '../../types/pb';
import ItemCard from '../ItemCard/ItemCard';
// import handleSelect from '../SearchPage/SearchPage';

const torrApiUrl = REACT_APP_TORR_API_ENDPOINT;


interface RequestPageProps {
  selectedItems: (Movie | Show)[];
  setSelectedItems: React.Dispatch<React.SetStateAction<(Movie | Show)[]>>;
  handleSelect: (item: Movie | Show, selected: boolean) => void;
}


// refactor to take in a JWT token and a username
const RequestPage: React.FC<RequestPageProps> = ({ selectedItems, setSelectedItems, handleSelect }) => {

  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username') || '';
  const [query, setQuery] = useState('');
  // const [mediaList, setMediaList] = useState<Media[]>([]);
  const [unapprovedMedia, setUnapprovedMedia] = useState(undefined);
  const [loading, setLoading] = useState(false);

  // const handleSelect = (item: Movie | Show, selected: boolean) => {
  //   // setSelectedItems(prevItems =>
  //   //   selected ? [...prevItems, item] : prevItems.filter(i => i.id !== item.id)
  //   // );
  //   console.log("request page handle select called")
  // };

  useEffect(() => {
    // console.log("handleSelect: " + ('title' in item ? item.title : item.name) + " " + selected)
    console.log(selectedItems.map(i => 'title' in i ? i.title : i.name));
  }, [selectedItems]);

  // Function to create a PBMediaRequest object for each Movie or Show
  const createPBMediaRequest = (item: Movie | Show) => {
    if ('title' in item) {
      // It's a Movie
      const pbMediaRequest: PBMediaRequest = {
        tmbd_id: item.id.toString(),
        media_name: item.title,
        media_year_released: item.release_date,
        media_type: 'movie',
        requested_by: username,
      };
      return pbMediaRequest;
    } else {
      // It's a Show
      const pbMediaRequest: PBMediaRequest = {
        tmbd_id: item.id.toString(),
        media_name: item.name,
        media_year_released: item.first_air_date,
        media_type: 'show',
        requested_by: username,
      };
      return pbMediaRequest;
    }
  };

  const sendManualMediaRequest = async (mediaRequest: QBTMediaRequest) => {
    try {
      setLoading(true);
      const response = await axios.post(torrApiUrl + '/' + username + '/download-media', mediaRequest, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'contentType': 'application/json',
        }
      });
      if (response.status === 200) {
        const data = response.data;
        setUnapprovedMedia(data);
        console.log(unapprovedMedia);
        setQuery('');
        setLoading(false);
      }
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'response' in error) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          console.error(axiosError.response.data);
          console.error(axiosError.response.status);
          console.error(axiosError.response.headers);
        } else if (axiosError.request) {
          console.error(axiosError.request);
        } else {
          console.error('Error', axiosError.message);
        }
      }
    }
  };

  const sendPBMediaRequest = async (mediaRequest: PBMediaRequest) => {
    try {
      return axios.post(torrApiUrl + '/download-media', mediaRequest, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'response' in error) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          console.error(axiosError.response.data);
          console.error(axiosError.response.status);
          console.error(axiosError.response.headers);
        } else if (axiosError.request) {
          console.error(axiosError.request);
        } else {
          console.error('Error', axiosError.message);
        }
      }
    }
  };


  const sendSelectedMediaRequests = async () => {

    const pb_media_requests = selectedItems.map((item) => {
      return createPBMediaRequest(item);
    });

    // send post request to server for each media request
    pb_media_requests.forEach(mr => {
        sendPBMediaRequest(mr);
    });

  };

  return (
    <div className='request-page'>
      <ToastContainer />
      {/* <div className="container"> */}
      <div className='page-header'>
        <h1 className="title">Sadie Spot Media Requester</h1>
        <h2 className="subtitle">Download your favorite movies</h2>
      </div>
      {/* </div> */}
      {/* <MediaForm onSubmit={sendManualMediaRequest} query={query} setQuery={setQuery} /> */}

      <h1>Selected Items:</h1>
      <h2>You can remove any unwanted selections now</h2>
      <div className='row justify-content-center'>
        {selectedItems.map((item) => (
          <ItemCard key={item.id} item={item} onSelect={handleSelect} initiallySelected={true} />
        ))}
      </div>
      <button className='btn btn-dark' onClick={sendSelectedMediaRequests}>Request Selected Media</button>
      {/* <div className="loading">{loading && 'Waiting for server response...'}</div> */}

    </div>
  );
};



export default RequestPage;

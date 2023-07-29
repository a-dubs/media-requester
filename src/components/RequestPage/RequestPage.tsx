
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { ToastContainer } from 'react-toastify';
import { QBTMediaRequest } from '../../types/qbt';
import MediaForm from "../../components/MediaForm/MediaForm"
import DownloadsDisplay from '../../components/DownloadsDisplay/DownloadsDisplay';
import { REACT_APP_TORR_API_ENDPOINT } from '../../env';
import "./RequestPage.css"

const torrApiUrl = REACT_APP_TORR_API_ENDPOINT;

// refactor to take in a JWT token and a username
const RequestPage: React.FC = () => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const [query, setQuery] = useState('');
  // const [mediaList, setMediaList] = useState<Media[]>([]);
  const [unapprovedMedia, setUnapprovedMedia] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const sendMediaRequest = async (mediaRequest: QBTMediaRequest) => {
    try {
      setLoading(true);
      const response = await axios.post(torrApiUrl + '/' + username + '/download-media', mediaRequest, {
        headers: {
          'Authorization': `Bearer ${token}`
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

  return (
    <div>
      <ToastContainer />
      {/* <div className="container"> */}
      <div className='page-header'>
        <h1 className="title">Sadie Spot Media Requester</h1>
        <h2 className="subtitle">Download your favorite movies</h2>
      </div>
      {/* </div> */}
      <MediaForm onSubmit={sendMediaRequest} query={query} setQuery={setQuery} />
      <div className="loading">{loading && 'Waiting for server response...'}</div>

      <DownloadsDisplay />
      
    </div>
  );
};



export default RequestPage;

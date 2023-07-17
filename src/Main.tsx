
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import './App.css';
import './components/MediaDisplay/MediaDisplay.css';
import './components/ProgressBar/ProgressBar.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MediaRequest } from './interfaces';
// import MediaDisplay from './components/MediaDisplay/MediaDisplay';
import MediaForm from "./components/MediaForm/MediaForm"
// import ApprovalForm from './components/ApprovalForm/ApprovalForm';
import DownloadsDisplay from './components/DownloadsDisplay/DownloadsDisplay';
import UserDisplay from './components/Auth/UserDisplay/UserDisplay';

// refactor to take in a JWT token and a username
const Main: React.FC<{ token: string, username: string }> = ({ token, username }) => {
  // const username
  const [query, setQuery] = useState('');
  // const [mediaList, setMediaList] = useState<Media[]>([]);
  const [unapprovedMedia, setUnapprovedMedia] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const sendMediaRequest = async (mediaRequest: MediaRequest) => {
    try {
      setLoading(true);
      // const response = await axios.post('http://127.0.0.1:5000/api/' + username + '/download-media', mediaRequest);
      const response = await axios.post('http://127.0.0.1:5000/api/'+username+'/download-media', mediaRequest, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        const data = response.data;
        // const data = await response.json();

        setUnapprovedMedia(data);
        console.log(unapprovedMedia);
        // check that response.data is valid as Media
        if (data) {
          // setMediaList(prevMediaList => [...prevMediaList, response.data]);
        }
        else {
          throw new Error('Invalid media response');
        }
        setQuery('');
        // setWaitingOnApproval(true);
        // setTorrents(prevTorrents => [...prevTorrents, newTorrent]);
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
      
    // }
    // } catch (error) {
    //   console.error(error);
    //   toast.error('An error occurred while sending media request to server');
    //   setLoading(false);
    // }
  };

  return (
    <div>
      <ToastContainer />
      {/* <div className="container"> */}
      <h1 className="title">Sadie Spot Media Requester</h1>
      <h2 className="subtitle">Download your favorite movies</h2>
      {/* </div> */}
      <MediaForm onSubmit={sendMediaRequest} query={query} setQuery={setQuery} />
      <div className="loading">{loading && 'Waiting for server response...'}</div>

      <DownloadsDisplay />
      <UserDisplay username={username} />
    </div>
  );
};



export default Main;

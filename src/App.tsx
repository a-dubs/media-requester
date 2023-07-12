import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './components/MediaDisplay/MediaDisplay.css';
import './components/ProgressBar/ProgressBar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Media, MediaRequest } from './interfaces';
// import MediaDisplay from './components/MediaDisplay/MediaDisplay';
import MediaForm from "./components/MediaForm/MediaForm"
// import ApprovalForm from './components/ApprovalForm/ApprovalForm';
import DownloadsDisplay from './components/DownloadsDisplay/DownloadsDisplay';


const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [mediaList, setMediaList] = useState<Media[]>([]);
  const [unapprovedMedia, setUnapprovedMedia] = useState(undefined);
  const [loading, setLoading] = useState(false);
  // const [waitingOnApproval, setWaitingOnApproval] = useState(false);
  // const [mediaRequest, setMediaRequest] = useState({
  //   bestTorrentBy: 'seeders',
  //   minSeeders: 2,
  //   minResolution: '',
  //   query: '',
  // });
  // const user_id = 'dev';
  const sendMediaRequest = async (mediaRequest: MediaRequest) => {
    try {
      setLoading(true);
      const response = await axios.post('http://127.0.0.1:5000/api/dev/download-media', mediaRequest);
      setUnapprovedMedia(response.data);
      console.log(unapprovedMedia);
      // check that response.data is valid as Media
      if (response.data) {
        setMediaList(prevMediaList => [...prevMediaList, response.data]);
      }
      else {
        throw new Error('Invalid media response');
      }
      setQuery('');
      // setWaitingOnApproval(true);
      // setTorrents(prevTorrents => [...prevTorrents, newTorrent]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while sending media request to server');
      setLoading(false);
    }
  };

  /*
  const approveDownload = async () => {
    try {
      const response = await axios.post('http://')
    } catch (error) {
      console.error(error);
      toast.error('An error occurred with sending approval request to server');
      setLoading(false);
    }
  }

  const requestAlternative = async () => {
    try {
      const response = await axios.post('http://')
    } catch (error) {
      console.error(error);
      toast.error('An error occurred with sending approval request to server');
      setLoading(false);
    }
  }
        */





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

      {/* unapprovedMedia, onApprove, onFetchAnother, loading, setLoading */}
      {/* <ApprovalForm
        unapprovedMedia={unapprovedMedia} onApprove={approveDownload} onFetchAnother={requestAlternative}
        loading={loading} setLoading={setLoading}
        waitingOnApproval={waitingOnApproval} setWaitingOnApproval={setWaitingOnApproval}
      /> */}
    </div>
  );
};

export default App;

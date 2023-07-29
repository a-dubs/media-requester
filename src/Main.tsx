import React, { useState } from 'react';
import Search from './components/SearchPage/SearchPage';
import './Main.css'
import { TMDBItem, Movie, Show } from './types/tmdb';
import './util.css'
import Toolbar from './components/Toolbar/Toolbar';
import UserDisplay from './components/Auth/UserDisplay/UserDisplay';
import RequestPage from './components/RequestPage/RequestPage';
import DownloadsPage from './components/DownloadsPage/DownloadsPage';

const Main = () => {
  const [selectedItems, setSelectedItems] = useState<(Movie | Show)[]>([]);
  const [currentPage, setCurrentPage] = useState<'search' | 'request' | 'downloads'>('search');
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const renderPageContent = () => {
    switch (currentPage) {
      case 'search':
        return <Search selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>;
      case 'request':
        return <RequestPage/>;
      case 'downloads':
        return <DownloadsPage/>;
    }
  };

  return (
    <div className='main'>
      
      <UserDisplay username={username} />
      
      <Toolbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPageContent()}
      
    </div>
  );
}

export default Main;




















// import React, { useState } from 'react';
// import axios, { AxiosError } from 'axios';
// import './App.css';
// import './components/MediaDisplay/MediaDisplay.css';
// import './components/ProgressBar/ProgressBar.css';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { MediaRequest } from '';
// // import MediaDisplay from './components/MediaDisplay/MediaDisplay';
// import MediaForm from "./components/MediaForm/MediaForm"
// // import ApprovalForm from './components/ApprovalForm/ApprovalForm';
// import DownloadsDisplay from './components/DownloadsDisplay/DownloadsDisplay';
// import UserDisplay from './components/Auth/UserDisplay/UserDisplay';
// import { REACT_APP_TORR_API_ENDPOINT } from './env';

// const torrApiUrl = REACT_APP_TORR_API_ENDPOINT;

// // refactor to take in a JWT token and a username
// const Main: React.FC<{ token: string, username: string }> = ({ token, username }) => {
//   // const username
//   const [query, setQuery] = useState('');
//   // const [mediaList, setMediaList] = useState<Media[]>([]);
//   const [unapprovedMedia, setUnapprovedMedia] = useState(undefined);
//   const [loading, setLoading] = useState(false);

//   const sendMediaRequest = async (mediaRequest: MediaRequest) => {
//     try {
//       setLoading(true);
//       const response = await axios.post(torrApiUrl + '/' + username + '/download-media', mediaRequest, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       if (response.status === 200) {
//         const data = response.data;
//         setUnapprovedMedia(data);
//         console.log(unapprovedMedia);
//         setQuery('');
//         setLoading(false);
//       }
//     } catch (error: unknown) {
//       if (typeof error === 'object' && error !== null && 'response' in error) {
//         const axiosError = error as AxiosError;
//         if (axiosError.response) {
//           console.error(axiosError.response.data);
//           console.error(axiosError.response.status);
//           console.error(axiosError.response.headers);
//         } else if (axiosError.request) {
//           console.error(axiosError.request);
//         } else {
//           console.error('Error', axiosError.message);
//         }
//       }
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       {/* <div className="container"> */}
//       <div className='page-header'>
//         <h1 className="title">Sadie Spot Media Requester</h1>
//         <h2 className="subtitle">Download your favorite movies</h2>
//       </div>
//       <UserDisplay username={username} />
//       {/* </div> */}
//       <MediaForm onSubmit={sendMediaRequest} query={query} setQuery={setQuery} />
//       <div className="loading">{loading && 'Waiting for server response...'}</div>

//       <DownloadsDisplay />
      
//     </div>
//   );
// };



// export default Main;

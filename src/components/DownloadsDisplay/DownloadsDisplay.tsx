import React, { useState, useEffect } from 'react';
import { QBTMediaDownloadInfo } from '../../types/qbt';
import MediaDisplay from '../../components/MediaDisplay/MediaDisplay';
import { REACT_APP_TORR_API_ENDPOINT } from '../../env';
import "./DownloadsDisplay.css"

const torrApiUrl = REACT_APP_TORR_API_ENDPOINT;

const DownloadsDisplay = () => {
  const [downloads, setDownloads] = useState<QBTMediaDownloadInfo[]>([]);

  // load JWT and username from local storage
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  useEffect(() => {
    // Function to fetch data from the API
    const fetchDownloads = async () => {
      console.log("cached username: " + localStorage.getItem('username'))
      let data = undefined
      try {
        const response = await fetch(torrApiUrl + '/' + username + '/get-progress-of-downloads', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        data = await response.json();
        console.log(data);
        setDownloads(data);
      } catch (error) {
        console.log(data)
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data initially
    fetchDownloads();

    // Fetch data every 10 seconds
    const interval = setInterval(fetchDownloads, 10000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <div>
      <div className="downloads-display-section">
        {!downloads.length ? (<h2 className="section-title">No Downloads in Progress</h2>) : (<h2 className="section-title">Downloads in Progress:</h2>)}
        {downloads.map(mdi => (
          <MediaDisplay key={mdi.hash} mediaDownloadInfo={mdi} />
        ))}
      </div>
    </div>
  );
};

export default DownloadsDisplay;

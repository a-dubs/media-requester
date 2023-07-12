import React, { useState, useEffect } from 'react';
import { MediaDownloadInfo } from '../../interfaces';
import MediaDisplay from '../../components/MediaDisplay/MediaDisplay';

const DownloadsDisplay = () => {
  const [downloads, setDownloads] = useState<MediaDownloadInfo[]>([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchDownloads = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/dev/get-progress-of-downloads');
        const data = await response.json();
        console.log(data);
        setDownloads(data);
      } catch (error) {
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
        { !downloads.length ? ( <h2 className="section-title">No Downloads in Progress</h2> ) : ( <h2 className="section-title">Downloads in Progress:</h2> ) }
        {downloads.map(mdi => (
          <MediaDisplay key={mdi.hash} mediaDownloadInfo={mdi} />
        ))}
      </div> 
    </div>
  );
};

export default DownloadsDisplay;

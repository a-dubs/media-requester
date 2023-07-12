import { parse } from 'path';
import React from 'react';
import { Media, MediaInfo, MediaDownloadInfo } from '../../interfaces';
import ProgressBar from '../ProgressBar/ProgressBar';
interface MediaDisplayProps {
  mediaDownloadInfo: MediaDownloadInfo
}
const MediaDisplay: React.FC<MediaDisplayProps> = ({ mediaDownloadInfo }) => {
  const media = mediaDownloadInfo.media;
  const mediaInfo = media.media_info;
  // convert eta_in_seconds to hours, minutes, seconds format separated by colons
  const etaHours = Math.floor(mediaDownloadInfo.eta_in_seconds / 3600);
  const etaMinutes = Math.floor((mediaDownloadInfo.eta_in_seconds % 3600) / 60);
  const etaSeconds = Math.floor((mediaDownloadInfo.eta_in_seconds % 3600) % 60);
  const eta_timestamp = etaHours + ':' + etaMinutes + ':' + etaSeconds;
  return (

    // <div className="media-display" key={mediaDownloadInfo.hash}>
    <div className="media-display">
      <div className='header'>
        <p className="requested-timestamp">Requested on: {mediaDownloadInfo.download_started_timestamp_readable}</p>
        {/* <h1> Requested Query: {media.requested_query}</h1> */}
        <h1>{media.requested_query}</h1>
      </div>
      <ProgressBar progress={mediaDownloadInfo.progress} />
      <div className="download-stats">
      
        <p>
          <strong>ETA:</strong> {eta_timestamp} (hh:mm:ss)
        </p>
        <p>
          <strong>Download Speed:</strong> {Math.round(mediaDownloadInfo.download_speed_kbyte)} KB/s
        </p>
        </div>
        

      {/* {mediaDownloadInfo.progress === 1 ? (
        <h3>Download Complete!</h3>
      ) : (
        <div>
          <h2>Download Information</h2>
          <div className="container">
            <div className="column">
              <p>

                <strong>Progress:</strong> {Math.round(mediaDownloadInfo.progress * 10000) / 100}%
              </p>
              <p>
                <strong>ETA:</strong> {eta_timestamp} (hh:mm:ss)
              </p>
            </div>
            <div className="column">
              <p>
                <strong>Download Speed:</strong> {Math.round(mediaDownloadInfo.download_speed_kbyte)} KB/s
              </p>
              <p>
                <strong>Upload Speed:</strong> {Math.round(mediaDownloadInfo.upload_speed_kbyte)} KB/s
              </p>
            </div>
          </div>
        </div>
      )} */}

      {/* <div>
        <h2>Download Information</h2>
        <div className="container">
        
            {mediaDownloadInfo.progress === 1 ? (
               <div className="column">
              <p className='centered-text'><strong>Download Complete!</strong></p>
                </div>
          ) : (
            <>
              <div className="column">
                <p>
                  <strong>Progress:</strong> {Math.round(mediaDownloadInfo.progress * 10000) / 100}%
                </p>
                <p>
                  <strong>ETA:</strong> {eta_timestamp} (hh:mm:ss)
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Download Speed:</strong> {Math.round(mediaDownloadInfo.download_speed_kbyte)} KB/s
                </p>
                <p>
                  <strong>Upload Speed:</strong> {Math.round(mediaDownloadInfo.upload_speed_kbyte)} KB/s
                </p>
              </div>
            </>
          )}
        </div>
      </div> */}

      <h2>Torrent Information</h2>
      <div className="container">
        <div className='row'>
          <p>
            <strong>Torrent Name:</strong> {media.name}
          </p>
        </div>
        {/* <div className='column'> */}
        <p><strong>Total Size:</strong> {media.size} (GB)</p>
        <p><strong>Seeders:</strong> {media.seeders}</p>
        <p><strong>Date Uploaded:</strong> {media.date_uploaded}</p>
        {/* </div> */}
      </div>

      <h2>Media Information</h2>
      {/* <div className="container">
        <div className="column">
          <p>
            <strong>Resolution:</strong> {mediaInfo.resolution ? mediaInfo.resolution : 'N/A'}
          </p>
          <p>
            <strong>UHD:</strong> {mediaInfo.UHD === null ? 'N/A' : mediaInfo.UHD ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>10-bit Color:</strong> {mediaInfo['10bit_color'] === null ? 'N/A' : mediaInfo['10bit_color'] ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Encoding:</strong> {mediaInfo.encoding ? mediaInfo.encoding : 'N/A'}
          </p>
        </div>
        <div className="column">
          <p>
            <strong>Audio Channels:</strong> {mediaInfo.audio_channels ? mediaInfo.audio_channels : 'N/A'}
          </p>
          <p>
            <strong>Subtitle Languages:</strong> {mediaInfo.subtitle_languages === null ? 'N/A' : mediaInfo.subtitle_languages.join(', ')}
          </p>
          <p>
            <strong>Audio Languages:</strong> {mediaInfo.audio_languages === null ? 'N/A' : mediaInfo.audio_languages.join(', ')}
          </p>
          <p>
            <strong>IMDb ID:</strong> {mediaInfo.imdb_id ? mediaInfo.imdb_id : 'N/A'}
          </p>
        </div>
      </div> */}
      <div className="container">
        <div className="column">
          <p>
            <strong>Resolution:</strong> {mediaInfo.resolution ? mediaInfo.resolution : 'N/A'}
          </p>
          <p>
            <strong>HDR:</strong> {mediaInfo.HDR === null ? 'N/A' : mediaInfo.HDR ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>10-bit Color:</strong> {mediaInfo['10bit_color'] === null ? 'N/A' : mediaInfo['10bit_color'] ? 'Yes' : 'No'}
          </p>
        </div>
        <div className="column">
          <p>
            <strong>Audio Channels:</strong> {mediaInfo.audio_channels ? mediaInfo.audio_channels : 'N/A'}
          </p>
          <p>
            <strong>Subtitle Languages:</strong> {mediaInfo.subtitle_languages === null ? 'N/A' : mediaInfo.subtitle_languages.join(', ')}
          </p>
          <p>
            <strong>Audio Languages:</strong> {mediaInfo.audio_languages === null ? 'N/A' : mediaInfo.audio_languages.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaDisplay;

import React, { useState } from 'react';
import { QBTMediaRequest } from '../../types/qbt';
import './MediaForm.css'

interface MediaFormProps {
  onSubmit: (mediaRequest: QBTMediaRequest) => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const MediaForm: React.FC<MediaFormProps> = ({ onSubmit, query, setQuery }) => {
  const [bestTorrentBy, setBestTorrentBy] = useState<string>('seeders');
  const [minSeeders, setMinSeeders] = useState<number>(1);
  const [minResolution, setMinResolution] = useState<string>('720p');
 

  const handleBestTorrentByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBestTorrentBy(event.target.value);
  };

  const handleMinSeedersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinSeeders(Number(event.target.value));
  };

  const handleMinResolutionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinResolution(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mediaRequest: QBTMediaRequest = {
      bestTorrentBy,
      minSeeders,
      minResolution,
      query,
    };

    onSubmit(mediaRequest);
  };


  return (
    <form className="media-form" onSubmit={handleSubmit}>
      <div className="search-section">
        <p className="label"><strong>Enter Movie Name (and year if possible)</strong></p>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      <div className='input-select-area'>
        <div className='input-select-conatiner'>
          <label><strong>
          Selection Priority  
          </strong></label>
          <label>
            <input
              type="radio"
              value="seeders"
              checked={bestTorrentBy === 'seeders'}
              onChange={handleBestTorrentByChange}
            />
            Select by Most Seeders
          </label>
          <label>
            <input
              type="radio"
              value="smallestFileSize"
              checked={bestTorrentBy === 'smallestFileSize'}
              onChange={handleBestTorrentByChange}
            />
            Select By Smallest File Size
          </label>
          <label>
            <input
              type="radio"
              value="largestFileSize"
              checked={bestTorrentBy === 'largestFileSize'}
              onChange={handleBestTorrentByChange}
            />
            Select By Largest File Size
          </label>
        </div>
        <div className='input-select-conatiner'>
          <label><strong>
            Minimum Resolution:
          </strong></label>
          <div>
            <label>
              <input
                type="checkbox"
                value="480p"
                checked={minResolution === '480p'}
                onChange={handleMinResolutionChange}
              />
              480p
            </label>
            <label>
              <input
                type="checkbox"
                value="720p"
                checked={minResolution === '720p'}
                onChange={handleMinResolutionChange}
              />
              720p
            </label>
            <label>
              <input
                type="checkbox"
                value="1080p"
                checked={minResolution === '1080p'}
                onChange={handleMinResolutionChange}
              />
              1080p
            </label>
            <label>
              <input
                type="checkbox"
                value="2160p"
                checked={minResolution === '2160p'}
                onChange={handleMinResolutionChange}
              />
              2160p (4k)
            </label>
          </div>
        </div>
      </div>
      
        <br></br>
        <div className='text-input-container'>
            <label><strong>Minimum Seeders:</strong></label>
          <input
              id='asdf'
              type="number"
              value={minSeeders}
              onChange={handleMinSeedersChange}
            />
          
        </div>



      <button className='media-form-button' type="submit">Request Media</button>
      {/* TODO: Put list of selected TMDBitems here */}
    </form>
  );
};

export default MediaForm;

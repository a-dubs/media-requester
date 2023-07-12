import React, { useState } from 'react';
import { MediaRequest } from '../../interfaces';


interface MediaFormProps {
  onSubmit: (mediaRequest: MediaRequest) => void;
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

    const mediaRequest: MediaRequest = {
      bestTorrentBy,
      minSeeders,
      minResolution,
      query,
    };

    onSubmit(mediaRequest);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="search-section">
        <h3 className="label">Enter Movie Name (and year if possible)</h3>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      <div>
        <div>
          <label><strong>
            
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

        <div>
          <label>
            Minimum Seeders:
            <input
              type="number"
              value={minSeeders}
              onChange={handleMinSeedersChange}
            />
          </label>
        </div>

        <div>
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

      <button type="submit">Request Media</button>
    </form>
  );
};

export default MediaForm;

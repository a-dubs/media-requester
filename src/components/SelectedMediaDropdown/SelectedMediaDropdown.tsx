import React, { FC, useState } from 'react';
import { TMDBItem, Movie, Show } from '../../types/tmdb';
// import MediaListItem from './MediaListItem';



const SelectedMediaDropdown: FC<{items:(Movie|Show)[]}> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleDropdownToggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <button onClick={handleDropdownToggle}>Selected Media</button>
      {isOpen && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{"title" in item ? item.title : item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectedMediaDropdown;

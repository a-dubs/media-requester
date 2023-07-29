// src/components/ResultCard/ResultCard.tsx

import React from 'react';
import { Movie, Show } from '../../types/tmdb';

interface CardProps {
  item: Movie | Show;
  onSelect: (item: Movie | Show) => void;
}

const Card: React.FC<CardProps> = ({ item, onSelect }) => {
  const title = 'title' in item ? item.title : item.name;
  const date = 'release_date' in item ? item.release_date : item.first_air_date;

  return (
    <div onClick={() => onSelect(item)}>
      <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={title} />
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  );
};

export default Card;

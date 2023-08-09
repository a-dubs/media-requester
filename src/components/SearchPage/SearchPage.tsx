import React, { useEffect, useState } from 'react';
import tmdb from '../../services/tmdb';
import { Movie, Show, MovieCollection, TMDBItem, ShowSeason } from '../../types/tmdb';
import ItemCard from '../ItemCard/ItemCard';
import Toolbar from '../Toolbar/Toolbar';
// import { readSync } from 'fs';
import { ClipLoader } from 'react-spinners';
import './SearchPage.css';
import { AxiosResponse } from 'axios';



interface SearchProps {
  selectedItems: (Movie | Show)[];
  setSelectedItems: React.Dispatch<React.SetStateAction<(Movie | Show)[]>>;
  handleSelect: (item: Movie | Show, selected: boolean) => void;
}

const SearchPage: React.FC<SearchProps> = ({ selectedItems, setSelectedItems, handleSelect }) => {
  const [query, setQuery] = useState('');
  const [enteredQuery, setEnteredQuery] = useState('');
  const [results, setResults] = useState<(Movie | Show)[]>([]);
  const [loadingResults, setLoadingResults] = useState(false);
  const [mode, setMode] = React.useState<'movie' | 'tv'>('movie');

  const handleModeChange = (mode: string) => {
    setMode(mode === 'tv' ? 'tv' : 'movie');
  };

  // const [results, setResults] = useState<Movie[]>([]);
  // const [results, setResults] = useState<Show[]>([]);

  // clear query and results when mode changes
  useEffect(() => {
    setEnteredQuery('');
    setQuery('');
    setResults([]);
  }, [mode]);

  useEffect(() => {
    // console.log("handleSelect: " + ('title' in item ? item.title : item.name) + " " + selected)
    console.log(selectedItems.map(i => 'title' in i ? i.title : i.name));
  }, [selectedItems]);

 

  const parseTMDBSeason = (season: ShowSeason): ShowSeason => {
    return {
      id: season.id,
      air_date: season.air_date,
      episode_count: season.episode_count,
      name: season.name,
      overview: season.overview,
      poster_path: season.poster_path,
      season_number: season.season_number,
    } as ShowSeason;
  };

  const parseTMDBShow = (item: Show, details: AxiosResponse<any, any>): Show => {
    const firstAirYear = new Date(details.data.first_air_date).getFullYear();
    const lastAirYear = new Date(details.data.last_air_date).getFullYear();
    const yearsAired = `${firstAirYear} - ${lastAirYear}`;
    // Fetch seasons for the TV show
    const seasons = details.data.seasons.map((season: ShowSeason) => {
      parseTMDBSeason(season);
    });
    return {
      id: details.data.id,
      name: details.data.name,
      overview: details.data.overview,
      first_air_date: details.data.first_air_date,
      last_air_date: details.data.last_air_date,
      years_aired: yearsAired,
      poster_path: details.data.poster_path,
      backdrop_path: details.data.backdrop_path,
      original_language: details.data.original_language,
      seasons: seasons,
      popularity: details.data.popularity,
      rating_average: details.data.vote_average,
      rating_count: details.data.vote_count,
    } as Show;
  };

  const parseTMDBMovie = (item: TMDBItem, details: AxiosResponse<any, any>): Movie => {
    return {
      id: details.data.id,
      title: details.data.title,
      overview: details.data.overview,
      release_date: details.data.release_date,
      runtime: details.data.runtime,
      poster_path: details.data.poster_path,
      backdrop_path: details.data.backdrop_path,
      original_language: details.data.original_language,
      belongs_to_collection_id: details.data.belongs_to_collection?.id,
      imdb_id: details.data.imdb_id,
      popularity: details.data.popularity,
      rating_average: details.data.vote_average,
      rating_count: details.data.vote_count,
    } as Movie;
  };

  const fetchSearchResults = async (query: string) => {
    let page = 1;
    let results: (Movie | Show)[] = [];
    // loop through pages of results until we find a page with less than 20 results
    while (true) {
      console.log('page: ' + page);
      const res = await tmdb.get(`/search/${mode}`, { params: { query, page } });
      const res_data = res.data.results;
      console.log(res_data.length)
      const promises = res_data.map(async (item: TMDBItem) => {
        const details = await tmdb.get(`/${mode}/${item.id}`);
        if (mode === 'movie') {
          return parseTMDBMovie(item as Movie, details);
        } else {
          return parseTMDBShow(item as Show, details)
        }
      });
      results = results.concat(await Promise.all(promises));
      if (res_data.length < 20 || page === 3) {
        break;
      }
      page++;
    }
    return results;
  }

  const handleSearch = async () => {
    if (query !== '') {
      setLoadingResults(true);
      setEnteredQuery(query)
      const results = await fetchSearchResults(query);
      setQuery('');
      // filter results to remove any items that don't have a poster path
      const filtered_results = results.filter((item) => item.poster_path !== null);
      // sort results by popularity
      filtered_results.sort((a, b) => b.popularity - a.popularity);
      setLoadingResults(false);
      setResults(filtered_results.slice(0, 20));
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='mode-select'>
          <button
            className={"btn " + (mode === 'movie' ? 'btn-success' : 'btn-secondary')}
            onClick={() => setMode('movie')}
          >
            Movies
          </button>
          <button
            className={"btn " + (mode === 'tv' ? 'btn-success' : 'btn-secondary')}
            onClick={() => setMode('tv')}
          >
            TV Shows
          </button>
        </div>
      </div>
      <div className='container '>
        <div className="search-bar">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <button className='btn btn-dark' onClick={handleSearch}>Search</button>
        </div>
        <div className='results-section'>
          {enteredQuery !== '' && <h1 className='col text-center'>Results for "{enteredQuery}"</h1>}
          {loadingResults ? (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10em', }}>
              <ClipLoader color={'#123abc'} loading={loadingResults} size={'10rem'} />
            </div>
          ) : (
            <div className='row justify-content-center'>
              {results.map((item) => (
                <ItemCard key={item.id} item={item} onSelect={handleSelect} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;



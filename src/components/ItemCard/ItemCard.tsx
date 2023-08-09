import React, { useEffect, useState } from 'react';
// import Modal from 'react-modal';
import { Movie, Show } from '../../types/tmdb';
import Checkbox from '../Checkbox/Checkbox';
import './ItemCard.css';

// Modal.setAppElement('#root');  // for accessibility purposes

const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',  // semi-transparent black
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    maxWidth: '1000px',
    zIndex: 1000,
  }
};

interface Props {
  item: Movie | Show;
  onSelect: (item: Movie | Show, selected: boolean) => void;
  initiallySelected?: boolean;
}

function convertToHoursMins(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}


// const ItemCard: React.FC<Props> = ({ item, onSelect, handleViewCollection, handleSelectCollection }) => {
const ItemCard: React.FC<Props> = ({ item, onSelect, initiallySelected }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(initiallySelected || false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    // console.log(('title' in item ? item.title : item.name) + ' selected: ' + selected);
    onSelect(item, selected);
  }, [selected]); // Re-run the effect when the selected state changes

  const handleClick = () => {
    alert('You clicked the div!');
  };

  'title' in item ? item as Movie : item as Show;

  return (
    <div className={'col-md-5 item-card' + (selected ? ' selected' : '')} onClick={handleSelect}>
      <div className='row no-gutters justify-content-start'>
        <img
          className='poster col-auto'
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
          alt={'title' in item ? item.title : item.name}
        />
        <div className='content col'>
          <h2>
            {('title' in item ? item.title : item.name) + " "}
            ({'title' in item ? item.release_date.slice(0, 4) : item.years_aired})
          </h2>
          {'title' in item && (
            <>
              <p><strong>Runtime: </strong>{convertToHoursMins(item.runtime)}</p>
            </>
          )}
          {'name' in item && (
            <>
              <p><strong>Years Aired: </strong>{item.years_aired}</p>
              <p><strong>Number of seasons: </strong>{item.seasons.length}</p>
            </>
          )}
          {/* <div className='btn btn-secondary' onClick={handleViewCollection}>View Collection</div>
          <div className='btn btn-secondary'>Select Collection</div> */}
        </div>
        <div className="col-auto align-self-center">
          <Checkbox isChecked={selected} setIsChecked={setSelected} />
        </div>
      </div>
      {/* <div className='more-details'>
      </div> */}

  {/* <input className='checkbox' type='checkbox' checked={selected} onChange={handleSelect} /> */ }
  {/* <button className='select-button' onClick={handleSelect}>Select</button> */ }
  {/* <button className='more-details' onClick={() => setModalOpen(true)}>More details</button>
      <Modal style={customModalStyles} contentLabel="Example Modal" isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <h2>{'title' in item ? item.title : item.name}</h2>
        <h3>Description:</h3>
        <p>{item.overview}</p>
        {'title' in item && (
          <>
            <p><strong>Runtime:</strong>{item.runtime}</p>
          </>
        )}
        {'name' in item && (
          <>
            <p><strong>Years Aired:</strong>{item.years_aired}</p>
            <p><strong>Number of seasons:</strong>{item.seasons.length}</p>
          </>
        )}
        <button className='close-modal' onClick={() => setModalOpen(false)}>Close</button>
      </Modal> */}

    </div >
  );
};

export default ItemCard;

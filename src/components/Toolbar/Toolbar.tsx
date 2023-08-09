import React, { useState } from 'react';

interface ToolbarProps {
  currentPage: 'search' | 'request' | 'downloads';
  setCurrentPage: (currentPage: 'search' | 'request' | 'downloads') => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ currentPage, setCurrentPage }) => {
  // const [currentPage, setCurrentPage] = useState(currentPage);


  return (
    <div>
      <div className="toolbar">
        <button onClick={() => setCurrentPage('search')} className={"btn btn-dark" + " " + (currentPage === 'search' ? 'active' : '')}>Search</button>
        <button onClick={() => setCurrentPage('request')} className={"btn btn-dark" + " " + (currentPage === 'request' ? 'active' : '')}>Request</button>
        <button onClick={() => setCurrentPage('downloads')} className={"btn btn-dark" + " " + (currentPage === 'downloads' ? 'active' : '')}>Downloads</button>
      </div>
    </div>
  );
};

export default Toolbar;

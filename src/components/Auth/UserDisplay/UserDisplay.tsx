import React from 'react';
import './UserDisplay.css';

// refactor to be passed in a username
const UserDisplay: React.FC<{ username?: string | null }> = ({ username }) => {


  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  
    // Redirect user to login page
    // history.push('/login');
  
    // Force a refresh of all the components
    window.location.reload();
  };
  

  return (
    // <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
    <div className='user-display'>
      {username && (
        <>
          <p>Logged in as: {username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default UserDisplay;

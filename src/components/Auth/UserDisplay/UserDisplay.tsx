import React from 'react';

// refactor to be passed in a username
const UserDisplay: React.FC<{ username: string }> = ({ username }) => {


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
    <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
      {username && (
        <>
          <h3>Logged in as: {username}</h3>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default UserDisplay;

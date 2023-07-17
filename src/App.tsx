// import React, { useState } from 'react';

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProtectedRoute from './components/Auth/ProtectedRoute/ProtectedRoute';
// import {AuthProvider } from './components/Auth/AuthProvider/AuthProvider';
// import Login from './components/Auth/Login/Login';
// import Main from './Main';


// const App: React.FC = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login/>} />
//           <ProtectedRoute path="/" element={<Main/>} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

import React from 'react';
import Login from './components/Auth/Login/Login';
import Main from './Main';
import jwtDecode from 'jwt-decode';

interface IToken {
  username: string;
}

const App: React.FC = () => {
  const token = localStorage.getItem('token');

  let username = "";

  if (token) {
    const decodedToken = jwtDecode<IToken>(token);
    username = decodedToken.username; // Or however you named it in your payload
  }

  if (!token) {
    return <Login />;
  }
  else {
    return <Main token={token} username={username} />;
  }
};

export default App;

// Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { REACT_APP_AUTH_API_ENDPOINT } from '../../../env';
import './Login.css';
import '../../../App.css';

const authApiUrl = REACT_APP_AUTH_API_ENDPOINT;


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(authApiUrl + '/login', {
        username,
        password,
      });

      // response is a JWT token
      console.log(response)

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
        console.log("cached token: " + localStorage.getItem('token'))
        console.log("cached username: " + localStorage.getItem('username'))
        window.location.reload();
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('An error occurred during login', error);
    }
  };

  return (

      <form className='login-form' onSubmit={handleSubmit}>
      <h1 className="title">Sadie Spot Media Requester</h1>
      <h2 className="subtitle">Download your favorite movies</h2>
      <div className='form-section'>
      <div><label>Username</label>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      </div>
      <div>
        <label>Password</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      </div>
        <button type="submit">Login</button>
      </div>
    </form>
    
    // </>
  );
};

export default Login;

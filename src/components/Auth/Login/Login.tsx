// Login.tsx
import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:16900/login', {
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
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;

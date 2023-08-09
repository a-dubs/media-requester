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

    // <form className='login-form' onSubmit={handleSubmit}>
    //   <h1 className="title">Sadie Spot Media Requester</h1>
    //   <h2 className="subtitle">Download your favorite movies</h2>
    //   <div className='form-section'>
    //     <div><label>Username</label>
    //       <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
    //     </div>
    //     <div>
    //       <label>Password</label>
    //       <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
    //     </div>
    //     <button type="submit">Login</button>
    //   </div>
    // </form>
    <section className="vh-100 gradient-custom form-section">
      <div className="container h-100 custom-form">
        <h1 className='text-center'>Sadiespot Media Requester</h1>
        <div className="row d-flex justify-content-center h-100">
          <div className="col-10 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
              <form className="card-body p-5 text-center" onSubmit={handleSubmit}>

                <div className="mb-5 mt-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>

                  <div className="form-outline form-white mb-4">
                    <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="username">Username</label>
                  </div>

                  <div className="form-outline form-white mb-4"> 
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="passowrd">Password</label>
                  </div>

                  {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

                  <button className="btn btn-outline-light" type="submit">Login</button>

                  {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                  </div> */}

                </div>

                {/* <div>
                  <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                  </p>
                </div> */}

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    // </>
  );
};

export default Login;

import React, { useState } from 'react';
import "../styles/Login.scss";
import { setLogin } from '../redux/state';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../Urls';
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Get data after fetching
        const loggedIn = await response.json();
        if (loggedIn) {
          dispatch(
            setLogin({
              user: loggedIn.user,
              token: loggedIn.token
            })
          );
          navigate("/");
        } else {
          console.error("Login failed: Invalid credentials");
        }
      } else {
        console.error("Login failed: HTTP status ", response.status);
      }
    } catch (err) {
      console.error("Login failed:", err.message);
    }
  };

  return (
    <div className='login'>
      <div className='login_content'>
        <form className='login_content_form' onSubmit={handleSubmit}>
          <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
          <button type='submit'>Log In</button>
        </form>
        <a href='/register'>Don't have an account? Sign Up</a>
      </div>
    </div>
  );
}

export default LoginPage;

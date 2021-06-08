// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';

// private route component


function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;
    // check to see if there is a token inside of localStorage
    // if not, the user is not authenticated

    if (!localStorage.getItem('jwtToken')) {
      console.log('is not authenticated');
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      console.log('token',token);
      setAuthToken(token);
      setCurrentUser(token);
    }
  },[]);

  const nowCurrentUser = userData => {
    console.log('--- inside nowCurrentUser ---');
    setCurrentUser(userData);
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    // determine if there is a jwt
    // if there is, remove it
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
    }
    // set currentUser to null
    setCurrentUser(null);
    // set is auth to false
    setIsAuthenticated(false);
  }


  return (
    <div className="App">
      {/* <Navbar  /> */}

      <Footer />
    </div>
  );
}

export default App;

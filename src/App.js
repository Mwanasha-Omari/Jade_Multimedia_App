
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import HomePage from './HomePage';

import Blog from './Blog/blog';
function App() {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <HomePage/>
      <Blog />

    </div>
  );
}

export default App;

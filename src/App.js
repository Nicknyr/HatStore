import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import FeaturedProducts from './FeaturedProducts';
import { Reset } from 'styled-reset';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <FeaturedProducts />
    </div>
  );
}

export default App;

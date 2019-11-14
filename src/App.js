import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';
import { Reset } from 'styled-reset';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default App;

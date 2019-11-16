import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import FeaturedProducts from './FeaturedProducts';
import AboutSection from './AboutSection';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { Reset } from 'styled-reset';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faComment, faThumbsUp, faStar } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faComment, faThumbsUp, faStar);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <FeaturedProducts />
      <AboutSection />
      <Newsletter />
    </div>
  );
}

export default App;

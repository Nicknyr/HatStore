import React from 'react';
import Home from './Home';
import ProductPage from './ProductPage';
import About from './About';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faCheckSquare, 
  faCoffee, 
  faComment, 
  faThumbsUp, 
  faStar, 
  faBars,
  faCalendarAlt,
  faComments,
  faPenSquare } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


library.add(fab, faCheckSquare, faCoffee, faComment, faThumbsUp, faStar, faBars, faCalendarAlt, faComments, faPenSquare);

function App() {
  return (
      <div className="App">
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product">
            <ProductPage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Router>
      </div>
  );
}

export default App;

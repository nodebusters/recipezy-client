import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Home from './components/Home'
import Ingredients from './components/Ingredients'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <nav>
            <li className="navigation-links"><Link to="/">Home</Link> </li>
            <li className="navigation-links"><Link to="/ingredients">Ingredients</Link> </li>
          </nav>
          
          {/* //TODO: implement login and register in the api.  */}
          <Route exact path="/" component={Home} />
          <Route exact path="/ingredients" component={Ingredients} />


        </React.Fragment>
      </Router>

    );
  }
}

export default App;
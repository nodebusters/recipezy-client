import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

// import Dashboard from './components/Dashboard'
import LogIn from './components/LogIn'
import Register from './components/Register'
import Home from './components/Home'
import Ingredients from './components/Ingredients'

class App extends Component {
  render() {
    return (

      // <Router>
      //   <React.Fragment>
      //     <nav>
      //       <li className="navigation-links"> <Link to="/login">Login</Link> </li>
      //       <li className="navigation-links"><Link to="/register">Register</Link> </li>
      //       <li className="navigation-links"><Link to="/ingredients">Ingredients</Link> </li>
      //     </nav>
          
      //     {/* //TODO: implement login and register in the api.  */}
      //     <Route exact path="/login" component={LogIn} />
      //     <Route exact path="/register" component={Register} />
      //     <Route exact path="/" component={Home} />
      //     <Route exact path="/ingredients" component={Ingredients} />
      //   </React.Fragment>
      // </Router>
      <h1>Test</h1>
    );
  }
}

export default App;
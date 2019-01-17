import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    ingredients: []
  }
  componentDidMount() {
    const url = 'http://localhost:5000';
    axios.get(url)
      .then(resp => {
        console.log(resp.data)
        this.setState({
          ingredients: resp.data
        })
        console.log(this.state)
      })
  }
  render() {
    return (
      <div>
        {this.state.ingredients.map(ingredient => {
          return <h1>{ingredient.name}</h1>
        })}
      </div>
    );
  }
}

export default App;

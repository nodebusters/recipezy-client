import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    ingredients: []
  }
  componentDidMount() {
    const url = process.env.REACT_APP_API_URL;
    console.log(url)
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

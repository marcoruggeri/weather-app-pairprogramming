import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const apiKey = 'zflbL8ybrrRPylLVUi2YI0gwcGbprkcu'

class App extends React.Component {
  getWeather(input) {
    axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${input}?apikey=${apiKeys}`)
      .then(res => {
        console.log(res);
      })
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      if(event.keyCode === 13){
        this.getWeather()
      }
    });
  }

  render() {
    return (
      <form>
        <label for="city">City Name</label>
        <input type="text" name="city"></input>
      </form>
    );
  }

}

export default App;

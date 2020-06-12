import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const apiKey = 'zflbL8ybrrRPylLVUi2YI0gwcGbprkcu';

class App extends React.Component {
  state = { value: '', weather: '' };

  getLocationKey = (query) => {
    return axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${query}`
    );
  };

  getWeather(input) {
    return axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${input}?apikey=${apiKey}`
    );
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const locationKey = (await this.getLocationKey(this.state.value)).data[0]
      .Key;
    const weather = await this.getWeather(locationKey);

    console.log(weather);

    this.setState({ weather: weather.data.DailyForecasts[0].Day.IconPhrase });

    console.log(this.state.weather);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="city">City Name</label>
          <input
            type="text"
            name="city"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
        </form>

        <div>{this.state.weather}</div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Time from './Time.js';
import Quote from './Quote.js';
// import Weather from '../api/Weather.js';
import axios from 'axios'


class App extends React.Component{

  weatherClick = ()=>{
    // axios.get('api.openweathermap.org/data/2.5/weather?zip=92880&APPID=815d38de5e85a1a57a6bb43292ea5844')
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?zip=92880,us&appid=815d38de5e85a1a57a6bb43292ea5844')
      .then((response)=>{
        console.log(response.data.main.temp)
        console.log('hi')
      });

  }

// http://api.openweathermap.org/data/2.5/weather?zip='+ zip +',us&appid=815d38de5e85a1a57a6bb43292ea5844'

  render(){
    return(
      <div id="app-center-container">
        <Time />
        <Quote />
        <button onClick= {this.weatherClick}>Test</button>
      </div>
    );
  }
}

export default App

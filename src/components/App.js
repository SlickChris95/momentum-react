import React from 'react';
import Time from './Time.js';
import Quote from './Quote.js';
import Weather from './Weather.js';


class App extends React.Component{

// http://api.openweathermap.org/data/2.5/weather?zip='+ zip +',us&appid=815d38de5e85a1a57a6bb43292ea5844'

  render(){
    return(
      <div>
      <Weather />

        <div id="app-center-container">
          <Time />
          <Quote />
        </div>
      </div>
    );
  }
}

export default App

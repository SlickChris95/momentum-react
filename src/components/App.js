import React from 'react';
import Time from './Time.js';
import Quote from './Quote.js';
import Weather from '../api/Weather.js';

class App extends React.Component{

weatherClick = async()=>{
  const response = await Weather.get('/data/2.5/weather?',{
      params: {zip: '94040'},
  });
  console.log(this)
}


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

import React from 'react'
import axios from 'axios'


class Weather extends React.Component {
  state = {temp: 0, cityName: ''}

  componentDidMount(){
    this.weatherTimerID = setInterval(
      () => this.weatherUpdate(),
      900000
    );
    this.weatherUpdate()
  }


  kelToFaren = (temp)=>{
    return (Math.floor((temp - 273.15) * 9/5 +32))
  }

  weatherUpdate = ()=>{
    // axios.get('api.openweathermap.org/data/2.5/weather?zip=92880&APPID=815d38de5e85a1a57a6bb43292ea5844')
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?zip=92880,us&appid=815d38de5e85a1a57a6bb43292ea5844')
      .then((response)=>{
        let responseTemp = response.data.main.temp
        let responseCityName = response.data.name
        // kelToFaren(responseTemp)
        this.setState({temp: this.kelToFaren(responseTemp), cityName: responseCityName })
        console.log(response)
        console.log(response.data.name)
      });

  }
  render(){
    return (
      <div id="weather-container">
        <div id="weather-display">{this.state.temp}&deg;</div>
        <div id="weather-city">{this.state.cityName}</div>
      </div>

    )
  }
}

export default Weather

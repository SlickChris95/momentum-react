import React from 'react'
import axios from 'axios'



export default axios.create({
  baseURL: 'api.openweathermap.org',
  headers: {
    appid: '815d38de5e85a1a57a6bb43292ea5844'
  }
});

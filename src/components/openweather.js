import react from 'React'
import axios from 'axios'



export default axios.create({
  baseURL: 'api.openweathermap.org/data/2.5/weather?',
  headers: {
    zip: '94040',
    appid: '815d38de5e85a1a57a6bb43292ea5844'
  }
});

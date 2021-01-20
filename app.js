const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

geocode('Boston', (error, geoResponse) => {
  if(error) {
    return console.log('Error', error);
  }
  const longitude = geoResponse.longitude;
  const latitude = geoResponse.latitude;
  const location = geoResponse.location;

  forecast(latitude, longitude, (error, forcastResponse) => {
    if(error) {
      return console.log('Error', error);
    }
    console.log(`${forcastResponse.description} - It is currently ${forcastResponse.temperature} degrees Fahrenheit out but it feels like ${forcastResponse.feelslike} degrees in ${location}.`);
  })
});

const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

geocode('Boston', (error, geoResponse) => {
  console.log('Error', error);
  console.log('Geo Response', geoResponse);

  const longitude = geoResponse.longitude;
  const latitude = geoResponse.latitude;
  const location = geoResponse.location;

  if (geoResponse && latitude && longitude)
  forecast(latitude, longitude, (error, forcastResponse) => {
    console.log('Error', error);
    console.log('Forcast Response', forcastResponse);
    console.log(`${forcastResponse.description} - It is currently ${forcastResponse.temperature} degrees Fahrenheit out but it feels like ${forcastResponse.feelslike} degrees in ${location}.`);
  })
});

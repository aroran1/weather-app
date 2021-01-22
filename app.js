const yargs = require('yargs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

// geocode('Boston', (error, geoResponse) => {
//   // console.log('geocode', city);
//   if(error) {
//     return console.log('Error', error);
//   }
//   const longitude = geoResponse.longitude;
//   const latitude = geoResponse.latitude;
//   const location = geoResponse.location;

//   forecast(latitude, longitude, (error, forcastResponse) => {
//     if(error) {
//       return console.log('Error', error);
//     }
//     console.log(`${forcastResponse.description} - It is currently ${forcastResponse.temperature} degrees Fahrenheit out but it feels like ${forcastResponse.feelslike} degrees in ${location}.`);
//   })
// });

yargs.command({
  command: 'getWeather',
  describe: 'get weather report',
  builder: {
    location: {
      describe: 'pass location',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    geocode(argv.location, (error, geoResponse) => {
      console.log('geocode', argv.location);
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
  }
});

// run in terminal as below
// node app.js getWeather --location="london"
// response
// geocode london
// Partly cloudy - It is currently 45 degrees Fahrenheit out but it feels like 41 degrees in London, Greater London, England, United Kingdom.

yargs.parse();

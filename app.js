const yargs = require('yargs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

// process.argv way - is a method to grab the parsed value from the terminal
const address = process.argv[2];
console.log('address', address);

// run in terminal as
// node app.js "london" 
// output as
// address [
//  '/usr/local/Cellar/node/15.3.0/bin/node',
//  '/Users/nidhiarora/Development/node/weather-app/app.js',
//  'london'
// ]

if(!address) {
  console.log('Please provide the address!');
} else {
  geocode(address, (error, geoResponse) => {
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


// Yargs way
// yargs.command({
//   command: 'getWeather',
//   describe: 'get weather report',
//   builder: {
//     location: {
//       describe: 'pass location',
//       demandOption: true,
//       type: 'string'
//     }
//   },
//   handler(argv) {
//     geocode(argv.location, (error, geoResponse) => {
//       console.log('geocode', argv.location);
//       if(error) {
//         return console.log('Error', error);
//       }
//       const longitude = geoResponse.longitude;
//       const latitude = geoResponse.latitude;
//       const location = geoResponse.location;

//       forecast(latitude, longitude, (error, forcastResponse) => {
//         if(error) {
//           return console.log('Error', error);
//         }
//         console.log(`${forcastResponse.description} - It is currently ${forcastResponse.temperature} degrees Fahrenheit out but it feels like ${forcastResponse.feelslike} degrees in ${location}.`);
//       })
//     });
//   }
// });

// process.argv is the command line way to grabbing the 3rd value in the array
// yargs is the package that makes it easy
// run in terminal as below
// node app.js getWeather --location="london"
// response
// geocode london
// Partly cloudy - It is currently 45 degrees Fahrenheit out but it feels like 41 degrees in London, Greater London, England, United Kingdom.

yargs.parse();

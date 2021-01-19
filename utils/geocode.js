const request = require('request');

// const weatherUrl = 'http://api.weatherstack.com/current?access_key=ff1dcc8b11a93789f32a23faa22a2f6d&query=London&units=f';
// queries
// access_key=ff1dcc8b11a93789f32a23faa22a2f6d for api access
// query=london for location
// units=f for Fahrenheit or celcius is default

// trial - 1 (from app.js)
// request({ url: url}, (error, response) => {
//   console.log(response);
//   const data = JSON.parse(response.body); // by passing json: true with request it handles response JSON.parse
//   console.log(data);
// })


// trial - 2 (from app.js)
// request({url: weatherUrl, json: true}, (error, response) => {
//   if (error) {
//     console.log(`Unable to connect to weather service!`);
//   } else if (response.body.error) {
//     console.log(`Weather Service Error ${response.body.error.code}: ${response.body.error.info}`);
//   } else {
//     // console.log(response.body.current);
//     const data = response.body;
//     const currentWeather = data.current;
//     console.log(`${currentWeather.weather_descriptions[0]} - It is currently ${currentWeather.temperature} degrees Fahrenheit out but it feels like ${currentWeather.feelslike} degrees.`);
//   }
// });

// // trial - 2 (from app.js)
// const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmlkYXJvcmEiLCJhIjoiY2trNDM5YWRsMWgxajJvbjJia2d2ODRrMCJ9.25cufCiu9ZlK0nlSpi4RlA";
// request({url: geoCodeUrl, json: true}, (error, response) => {
//   if(error) {
//     console.log(`Unable to connect to geo service!`);
//   } else if (response.body.features.length === 0) {
//     console.log(`Unable to find search. Try another search!`);
//   } else {
//     const data = response.body;
//     // console.log(response.body.features[0]);
//     const longitude = data.features[0].center[0];
//     const latitude = data.features[0].center[1];
//     console.log(`longitude: ${longitude} and latitude: ${latitude}`);
//   }
// });


// trial - 3 (final version)
const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibmlkYXJvcmEiLCJhIjoiY2trNDM5YWRsMWgxajJvbjJia2d2ODRrMCJ9.25cufCiu9ZlK0nlSpi4RlA`;

  request({url: url, json: true}, (error, response) => {
    if(error) {
      // console.log(`Unable to connect to geo service!`);
      callback('Unable to connect to geo service!', undefined);
    } else if (response.body.features.length === 0) {
      // console.log(`Unable to find search. Try another search!`);
      callback('Unable to find search. Try another search!', undefined);
    } else {
      // const data = response.body;
      // // console.log(response.body.features[0]);
      // const longitude = data.features[0].center[0];
      // const latitude = data.features[0].center[1];
      // console.log(`longitude: ${longitude} and latitude: ${latitude}`);
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      });
    }
  });
}

module.exports = geocode;

const request = require('request');

const weatherUrl = 'http://api.weatherstack.com/current?access_key=ff1dcc8b11a93789f32a23faa22a2f6d&query=london&units=f';
// queries
// access_key=ff1dcc8b11a93789f32a23faa22a2f6d for api access
// query=london for location
// units=f for Fahrenheit or celcius is default

// request({ url: url}, (error, response) => {
//   console.log(response);
//   const data = JSON.parse(response.body); // by passing json: true with request it handles response JSON.parse
//   console.log(data);
// })
request({url: weatherUrl, json: true}, (error, response) => {
  // console.log(response.body.current);
  const data = response.body;
  const currentWeather = data.current;
  console.log(`${currentWeather.weather_descriptions[0]} - It is currently ${currentWeather.temperature} degrees Fahrenheit out but it feels like ${currentWeather.feelslike} degrees.`);
});

const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmlkYXJvcmEiLCJhIjoiY2trNDM5YWRsMWgxajJvbjJia2d2ODRrMCJ9.25cufCiu9ZlK0nlSpi4RlA";
request({url: geoCodeUrl, json: true}, (error, response) => {
  const data = response.body;
  const map = data.features[0];
  // console.log(response.body.features[0]);
  console.log(`longitude: ${map.center[0]} and latitude: ${map.center[1]}`);
});
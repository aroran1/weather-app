const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=ff1dcc8b11a93789f32a23faa22a2f6d&query=london&units=f';

// queries
// access_key=ff1dcc8b11a93789f32a23faa22a2f6d for api access
// query=london for location
// units=f for Fahrenheit or celcius is default

// request({ url: url}, (error, response) => {
//   console.log(response);
//   const data = JSON.parse(response.body); // by passing json: true with request it handles response JSON.parse
//   console.log(data);
// })

request({url: url, json: true}, (error, response) => {
  // console.log(response.body.current);
  const currentWeather = response.body.current;
  console.log(`${currentWeather.weather_descriptions[0]} - It is currently ${currentWeather.temperature} degrees Fahrenheit out but it feels like ${currentWeather.feelslike} degrees.`);
});
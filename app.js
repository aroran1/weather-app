const request = require('request');

const weatherUrl = 'http://api.weatherstack.com/current?access_key=ff1dcc8b11a93789f32a23faa22a2f6d&query=London&units=f';
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
  if (error) {
    console.log(`Unable to coonect to weather service!`);
  } else if (response.body.error) {
    console.log(`Weather Service Error ${response.body.error.code}: ${response.body.error.info}`);
  } else {
    // console.log(response.body.current);
    const data = response.body;
    const currentWeather = data.current;
    console.log(`${currentWeather.weather_descriptions[0]} - It is currently ${currentWeather.temperature} degrees Fahrenheit out but it feels like ${currentWeather.feelslike} degrees.`);
  }
});

const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmlkYXJvcmEiLCJhIjoiY2trNDM5YWRsMWgxajJvbjJia2d2ODRrMCJ9.25cufCiu9ZlK0nlSpi4RlA";
request({url: geoCodeUrl, json: true}, (error, response) => {
  if(error) {
    console.log(`Unable to coonect to geo service!`);
  } else if (response.body.features.length === 0) {
    console.log(`body error geo`);
  } else {
    const data = response.body;
    // console.log(response.body.features[0]);
    const longitude = data.features[0].center[0];
    const latitude = data.features[0].center[1];
    console.log(`longitude: ${longitude} and latitude: ${latitude}`);
  }
});
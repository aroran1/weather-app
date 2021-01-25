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

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=ff1dcc8b11a93789f32a23faa22a2f6d&query=${lat},${long}&units=f`;
  request({url, json: true}, (error, { body }) => { // removed response.body to body as ES6 destructuring
    if(error) {
      // console.log(`Unable to connect to weather service!`);
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      // console.log(`Weather Service Error ${body.error.code}: ${body.error.info}`);
      callback(`Weather Service Error ${body.error.code}: ${body.error.info}`, undefined);
    } else {
      callback(undefined, {
        description: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
      });
    }
  });
}

module.exports = forecast;
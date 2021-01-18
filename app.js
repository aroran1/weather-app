const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=ff1dcc8b11a93789f32a23faa22a2f6d&query=london';

request({ url: url}, (error, response) => {
  console.log(response);
  const data = JSON.parse(response.body);
  console.log(data);
})
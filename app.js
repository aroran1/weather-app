const request = require('request');
const geocode = require('./utils/geocode');

geocode('Boston', (error, response) => {
  console.log('Error', error);
  console.log('Response', response);
});
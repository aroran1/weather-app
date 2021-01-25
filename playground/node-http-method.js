const https = require('https');
const lat = 40;
const long = -75;
const url = `http://api.weatherstack.com/current?access_key=ff1dcc8b11a93789f32a23faa22a2f6d&query=${lat},${long}&units=f`;

// THIS CODE DOES NOT WORK!
const request = https.request(url, (response) => {
  let data = '';
  
  response.on('data', (chunk) => {
    // console.log('chunk', chunk);
    data = data + chunk.toString();
    // console.log('data on', data);
  });

  response.end('end', () => {
    const body = JSON.parse(data);
    console.log('body', body);
  });
});

request.on('error', (error) => {
  console.log('error', error);
});

request.end();
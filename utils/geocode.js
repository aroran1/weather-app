const request = require('request');

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
const geocode = (city, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoibmlkYXJvcmEiLCJhIjoiY2trNDM5YWRsMWgxajJvbjJia2d2ODRrMCJ9.25cufCiu9ZlK0nlSpi4RlA`;

  request({url, json: true}, (error, { body }) => {
    if(error) {
      // console.log(`Unable to connect to geo service!`);
      callback('Unable to connect to geo service!', undefined);
    } else if (body.features.length === 0) {
      // console.log(`Unable to find search. Try another search!`);
      callback('Unable to find search. Try another search!', undefined);
    } else {
      // const data = body;
      // // console.log(body.features[0]);
      // const longitude = data.features[0].center[0];
      // const latitude = data.features[0].center[1];
      // console.log(`longitude: ${longitude} and latitude: ${latitude}`);
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      });
    }
  });
}

module.exports = geocode;

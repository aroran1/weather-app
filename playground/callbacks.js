// callback is nothing but a dunction passed in as an argument with the intention to be called later on
// Not all callbacks are asyncronous

// Set Timeout callback
// callback as async method
setTimeout(() => {
  console.log('Two second are up!');
}, 3000);


// callback as sync method - array methods like forEach or filter
const names = ['Andres', 'Jen', 'Jess'];
const shortNames = names.filter(name => name.length <= 4);
console.log(shortNames);

// async example without callback
const geocode = (addres) => {
  setTimeout(() => {
    const data = {
      longitude: 0,
      latitude: 0
    };
    return data;
  }, 1500);
}
const data = geocode('london');
console.log('Failing data', data);

// OUTPUT
// [ 'Jen', 'Jess' ]
// data undefined
// Two second are up!

// Reason
// geocode function returns undefind straight away in sync pattern because javascript runs the outer function 
// which doesn't return anything implicity from geocode function, which finish running immidetely and 
// javascript return it as undefind
// the return data is passed from the nested setTimeout function and not from the main function
// return from a function works for a non nested function returns
// for nested function returns its best to use callback methods

// FIX
// async example with callback
const geocodeWithCB = (addres, callback) => {
  setTimeout(() => {
    const data = {
      longitude: 0,
      latitude: 0
    };
    callback(data);
  }, 1500);
}
geocodeWithCB('london', (data) => {
  console.log('FIX data', data);
});

// OUTPUT
// [ 'Jen', 'Jess' ]
// Failing data undefined
// FIX data { longitude: 0, latitude: 0 }
// Two second are up!


// Callback Challenge
// return the sum from the call back method

// Original code
// add(1, 4, (sum) => {
// console.log(sum);
// })

const add = (a, b, sumCB) => {
  setTimeout(() => {
    sumCB(a + b);
  }, 2000);
}

add(1, 4, (sum) => {
  console.log(sum);
})

// sync example - code running in order
console.log('Sync - Starting...');

console.log('Sync - Code in the middle');

console.log('Sync - Finished...');

// async example - code running in order except the ones need to be waiting for
console.log('Async 1 - Starting...');

setTimeout(() => {
  console.log('Async 1 - with 2000 timeout response - Code in the middle');
}, 2000);

console.log('Async 1 - Finished...');


// async example - code running in order except the ones need to be waiting for
console.log('Async 2 - Starting...');

setTimeout(() => {
  console.log('Async 2 - with 2000 timeout response - Code in the middle');
}, 2000);

setTimeout(() => {
  console.log('Async 2 - with 0 timeout response - Code in the middle');
}, 0)

console.log('Async 2 - Finished...');
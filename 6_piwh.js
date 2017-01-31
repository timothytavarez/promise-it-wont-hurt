'use strict';

// .catch block

let justError = new Promise(function(resolve, reject){
  console.log('Some action');
})

justError.catch(function (error) {
  console.error(error.message);
});

// .resolve, .reject

let resolvePromise = new Promise.resolve('Success!'),
  rejectPromise = new Promise.reject('Failure!');

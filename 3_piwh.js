'use strict';

function onReject(error) {
  console.log(error.message);
}

let promise = new Promise(function(fulfill, reject) {
  setTimeout(function() {
    reject(new Error('REJECTED!'));
  }, 300)
});

function onReject(error) {
  console.log(error.message);
}

promise.then(null, onReject);

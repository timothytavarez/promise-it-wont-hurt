'use strict';

let promise = new Promise(function (fulfilled, reject) {
  setTimeout(function() {
    fulfilled('FULFILLED!');
  }, 300);
});

promise.then(console.log);

'use strict';

function attachTitle(target) {
  return 'DR. ' + target;
}

let fulfilledPromise = Promise.resolve("MANHATTAN");

fulfilledPromise.then(attachTitle)
  .then(console.log);

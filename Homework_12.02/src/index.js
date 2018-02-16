const _ = require('lodash');
const copy = require('./copy');
const reverse = require('./reverse');

const array = [1,2,3,4,5];

console.log(copy.arrayCopy(array));
console.log(copy.copyArray(array));
console.log(copy.arrayDeepCopy(array));

reverse.reverseArray(array);

// Array deep copy using lodash 
const deepCopy = _.map(array, _.clone);
console.log(deepCopy);


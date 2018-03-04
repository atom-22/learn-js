
const copy = require('./copy');
const reverse = require('./reverse');

const array = [7,1,'Jon',[1,2],3,4,null,{surname:"Doe"},undefined,5];

console.log(copy.deepCopy(array));

console.log(copy.forEach_arrayCopy(array));
console.log(copy.arrayCopy(array));
console.log(copy.map_arrayCopy(array));
console.log(copy.lodash_arrayCopy(array));

console.log(reverse.arrayReverse(array));

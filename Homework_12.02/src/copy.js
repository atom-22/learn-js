
const _ = require('lodash');

const deepCopy = function(object){
   let output, value, key;
   output = Array.isArray(object) ? [] : {};
   for (key in object) {
       value = object[key];
       output[key] = (typeof value === "object") ? deepCopy(value) : value;
   }
   return output;
}

const arrayCopy = function(array){
	let arr = [];
	for(let i=0, length = array.length; i<length; i++){
		arr[i] = array[i];
	}
	return arr;
}

const map_arrayCopy = function(arr){
	let copyArr = [];
	arr.map(function(x){
		copyArr.push(x);
	});
	return copyArr;	
}

const lodash_arrayCopy = function(objects){
	let deep = _.cloneDeep(objects);
	return deep;
}

const forEach_arrayCopy = function(arr){
	let copyArr = [];
	arr.forEach(function(x){
		copyArr.push(x);
	});
	return copyArr;	
}

module.exports = {
	deepCopy,
	arrayCopy,
	map_arrayCopy,
	lodash_arrayCopy,
	forEach_arrayCopy
} 



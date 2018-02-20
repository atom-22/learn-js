
const _ = require('lodash');

const DeepCopy = function(o){
   var output, v, key;
   output = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       output[key] = (typeof v === "object") ? DeepCopy(v) : v;
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
	DeepCopy,
	arrayCopy,
	map_arrayCopy,
	lodash_arrayCopy,
	forEach_arrayCopy
} 



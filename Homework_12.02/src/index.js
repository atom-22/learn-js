const _ = require('lodash');

const array = [53,45,7,-12,6,3];

// Array deep copy using lodash 
const deepCopy = _.map(array, _.clone);
console.log(deepCopy);

//Array shallow copy using map and array's push method
function copyArray(arr){
	let copyArr = [];
	arr.map(function(x){
		copyArr.push(x);
	});
	return copyArr;	
}
console.log(copyArray(array));

//Array copy
function arrayCopy(arr){
	let copyArr = [];
	arr.forEach(function(x){
		let i = 0;
		i = x;
		copyArr.push(i);
		++i;
	});
	return copyArr;	
}
console.log(arrayCopy(array));

//Array deep copy using for loop
function arrayDeepCopy(){
	let arr = [];
	for(let i=0, length = array.length; i<length; i++){
		arr[i] = array[i];
	}
	return arr;
}
console.log(arrayDeepCopy());

//reversed array using reduce
const reverseArray = [1,2,3,5].reduce(function (a, b, index, array){
	let innerArray = [];
	for(let i = index; i >= array[0]; --i){
		innerArray.push(array[i]);
	}
  	return innerArray;
},0);
console.log(reverseArray);
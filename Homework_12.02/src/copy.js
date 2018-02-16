
// shallow copy
const arrayCopy = function(arr){
	let copyArr = [];
	arr.forEach(function(x){
		copyArr.push(x);
	});
	return copyArr;	
}

const arrayDeepCopy = function(array){
	let arr = [];
	for(let i=0, length = array.length; i<length; i++){
		arr[i] = array[i];
	}
	return arr;
}
 
const copyArray = function(arr){
	let copyArr = [];
	arr.map(function(x){
		copyArr.push(x);
	});
	return copyArr;	
}

module.exports = {
	arrayCopy,
	arrayDeepCopy,
	copyArray
}
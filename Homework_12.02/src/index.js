var pjson = require('../package.json');
console.log(pjson.scripts);

const array = [53,45,7,-12,6,3];

function copyArray(arr){
	let copyArr = [];
	arr.map(function(x){
		copyArr.push(x);
	});
	return copyArr;	
}
console.log(copyArray(array));

function arrayCopy(arr){
	let copyArr = [];
	arr.forEach(function(x){
		copyArr.push(x);
	});
	return copyArr;	
}
console.log(arrayCopy(array));

const reverseArray = [1,2,3,5].reduce(function (a, b, index, array){
	let innerArray = [];
	for(let i = index; i >= array[0]; --i){
		innerArray.push(array[i]);
	}
  	return innerArray;
},0);
console.log(reverseArray);
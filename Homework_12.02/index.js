var arr = [53,45,7,-12,6,3];

function copyArr(arr){
	var copyArr = [];
	arr.map(function(x){
		copyArr.push(x);
	});
	return copyArr;	
}

console.log(copyArr(arr));


function arrCopy(arr){
	var copyArr = [];
	arr.forEach(function(x){
		copyArr.push(x);
	});
	return copyArr;	
}

console.log(arrCopy(arr));



var revArr = [1,2,3,5].reduce(function (a, b, index, array){
	var inArr = [];
	for(var i = index; i >= array[0]; --i){
		inArr.push(array[i]);
	}
  	return inArr;
},0);

console.log(revArr);
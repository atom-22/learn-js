var arr = [53,45,7,-12,6,3];

function logArrCopy(arr){
	var copyArr = [];
	arr.map(function(x){
		copyArr.push(x);
	});
	console.log(copyArr);	
}


logArrCopy(arr);


function lagCopyArr(arr){
	var copyArr = [];
	arr.forEach(function(x){
		copyArr.push(x);
	});
	console.log(copyArr);	
}


lagCopyArr(arr);



var sum = [1, 2, 3].reduce(function (a, b) {
  return a + b;
}, 10);

console.log(sum);
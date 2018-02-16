
//fix
const reverseArray = function(arr){
	const revArray = arr.reduce(function (a, b, index, array){
	let innerArray = [];
	for(let i = index; i >= array[0]; --i){
		innerArray.push(array[i]);
	}
  	return innerArray;
	},0);
	console.log(revArray);
}


exports.reverseArray = reverseArray;
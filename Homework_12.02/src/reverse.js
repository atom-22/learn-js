
const arrayReverse = function(arr){
	let reverseArr = arr.reduce(function(a,b){
		return [b].concat(a); 
	})
	return reverseArr;

exports.arrayReverse = arrayReverse;
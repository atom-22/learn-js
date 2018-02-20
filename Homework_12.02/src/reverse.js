
const reverseArray = function(arr,brr){
	brr = arr.reduce(function(a,b){
		return [b].concat(a); 
	})
	return brr;
}

exports.reverseArray = reverseArray;
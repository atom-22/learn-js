//Array.prototype.forEach
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


const arr = [1,2,3,4,5]

arr.forEach((item, i, arr)=> {
   console.log("index is: " , i),
   console.log("item is: " , item),
   console.log("arr is: " , arr)
});

console.log("----------------------");

//Array.prototype.map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// var arr2 = [];
// for(let i=0; i<arr.length; ++i){
//     arr2.push(Math.pow(arr[i], 2));
// }
// console.log(arr2);

var arr3 = arr.map((item)=> Math.pow(item, 2))
console.log(arr3);

console.log("----------------------");

//Array.prototype.reduce
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

var result = arr.reduce( (prevValue, currentValue) => {
    return prevValue + currentValue
}, 100);


console.log(result)


const reducer = (accumulator, currentValue) => { 
    console.log(accumulator);
    console.log(currentValue);
    console.log("**********");
    return accumulator + currentValue;
  }
  
  // 1 + 2 + 3 + 4
  //console.log(array1.reduce(reducer));
  // expected output: 10
  
  // 5 + 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer, 5));
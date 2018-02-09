// Promise
// async code

//Exocution context
// global -> functions

//global --> this

//Event Queue

// 1. onClick
// 2. setSitmeOut
// 3. onHover

// JS runs with 2 phase
// Phase 1. Creation Phase
// Pahse 2. Execution Phase


//  console.log(x);
 
//  var x = 0;

//  function x(){

//  };

//x();

// foo();

//function declaration
// function foo(){
//     console.log("foo")
// }

//bar(); undefined is not a function

//function expression
// var bar = function(){
//     console.log("bar");
// }

//----------Promse------------

//1. Pending 2. Rejected 3. Resolved

const promise = new Promise(function(resolve, reject){
   setTimeout(()=>{
    resolve("Sucsess!!")
   }, 500);

});

promise.then((result)=>{
    console.log(result);
    return "some other calculated result!"
})
.then(result=>console.log(result))
.then(result=>{
    let err = new Error();
    err.message = "error message";
    throw err;
})
.catch( (e)=> {
    console.error(e.message);
})

for(let i = 0; i< 10000; i++){
    console.log(i);
}
 

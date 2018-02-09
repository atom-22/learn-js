const promise1 = new Promise(function(resolve, reject){
    function f(message){
        resolve(message)
    }
    setTimeout(f.bind(null,"succes promise 1"), 1000);
})



const promise2 = new Promise(function(resolve, reject){    
    setTimeout(resolve.bind(null,'success promise 2'), 2000);
})


Promise.all([promise1, promise2])
    .then( (res)=> console.log(res))
    .catch( e=>console.log(e))




// function foo(x,y){
//     console.log(x+y);
// }

// var foo1 = foo.bind(null,7);
// foo1(5);

function baz(a, b){
   a("akjhakjhfka");
   b();
}

function f0(message){
    console.log(message);
}
function f1(x){
    console.log(x+x);
}

baz(f0.bind(null, "uuuuu"), f1.bind(null,7));

console.log("------------------------------------------")



// Promise.race([promise1,promise2])
//     .then(function(res){
//       return new Promise(function(resolve, reject){
//         setTimeout(()=> {
//             resolve("sucess p")
//         }, 500)
//     })
//     })
//     .then((res)=> {
//         console.log("nested" , res) 
//         //res.then((res)=>console.log(res))
//     })
    



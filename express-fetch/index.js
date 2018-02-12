var express = require('express');
var app = express();
var path = require('path');
var fetch = require('isomorphic-fetch');

// app.get('/user', (req, res) => { 
//     res.sendFile(path.resolve(__dirname, "user.json"));  
// });

// app.listen(5000, ()=>(console.log("Port 5000")));


// 1.geted user data and loged it using fetch API

// var localJson = fetch('http://localhost:5000/user');

// localJson
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(e => console.log(e));



// 2.geted local user data from our express server and from other server

// var localJson = fetch('http://localhost:5000/user');
// var globalJson = fetch('https://jsonplaceholder.typicode.com/posts/1');

// Promise.all([localJson,globalJson])
//   .then(result => console.log("Result!"),
//         error => console.log("Error!") 
// )


//3.using fetch get forked repos from github

app.get('/', (req, res) => {
    res.send(req.query.username);                             // /?username = ''
});

app.listen(3000, ()=>console.log('Port 3000'));


userdata = fetch('https://api.github.com/users/atom-22/repos');

userdata
    .then(response => response.json())
    .then((json)=>{
        for(let i=0;i < json.length;i++){
            if(json[i].fork === true){
                console.log(json[i].id);
            }       
        }  
    })
    .catch(e => console.error(e));




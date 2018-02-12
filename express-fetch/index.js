var express = require('express');
var app = express();
var path = require('path');
var fetch = require('isomorphic-fetch');

app.get('/user', (req, res) => { 
    res.sendFile(path.resolve(__dirname, "user.json"));  
});

app.listen(5000, ()=>(console.log("Port 5000")));


// 1.geted user data and loged it using fetch API

// var localJson = fetch('http://localhost:5000/user');

// localJson
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(e => console.log(e));



// 2.geted local user data from our express server and from other server

var localJson = fetch('http://localhost:5000/user');
var globalJson = fetch('https://jsonplaceholder.typicode.com/posts/1');

Promise.all([localJson,globalJson])
  .then(result => console.log("Result!"),
        error => console.log("Error!") 
)



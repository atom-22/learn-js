var express = require('express');
var app = express();
var path = require('path');
var fetch = require('isomorphic-fetch');

app.get('/user', (req, res) => { 
    res.sendFile(path.resolve(__dirname, "user.json"));  
});

app.listen(5000, ()=>(console.log("Port 5000")));


// 1.get user data and loged it using fetch API

var request = fetch('http://localhost:5000/user');

 request
   .then(response => response.json())
   .then(({name: firstName , age, address : {streat} }) => console.log(firstName, age, streat ))
   .catch(e => console.log(e));

console.log("----------------------------------------");

// 2.geted local user data from our express server and from other server

var userRequest = fetch('http://localhost:5000/user');
var postsRequest = fetch('https://jsonplaceholder.typicode.com/posts/1');

Promise.all([userRequest,postsRequest])
  .then(result => console.log("success!"),
        error => console.log(error) 
)

console.log("----------------------------------------");

//3.using fetch get forked repos from github

app.get('/', (req, res) => {
    res.send(`{"username" : "${req.query.username}"}`);                             // /?username = ''
});
app.listen(3000, ()=>console.log('Port 3000'));


const myUserName = "atom-22"

fetch('http://localhost:3000/?username=' + myUserName)
    .then(response => response.json())
    .then(result => result.username)
    .then( user => {
      const request =  fetch(`https://api.github.com/users/${user}/repos`)
      request
        .then(response => response.json())
        .then((result)=>{
            //imperative //HOW?
            for(let i=0, length = result.length ; i < length; ++i ){
                const repo = result[i];
                //repo.fork === true && console.log(repo.id)
                if(repo.fork === true){
                    console.log(repo.id);
                }       
            }

            //declarative //WHAT?
            result.forEach(({fork, id}) => fork && console.log(id));

        })
        .catch(e => console.error(e));
    })
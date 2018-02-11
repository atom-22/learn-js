var express = require('express');
var app = express();
var path = require('path');
var fetch = require('isomorphic-fetch');

app.get('/user', (req, res) => { 
    res.sendFile(path.resolve(__dirname, "user.json"));  
});

app.listen(5000);

var requestJson = fetch('http://localhost:5000/user');

requestJson
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(e => console.log(e));



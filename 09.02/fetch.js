const fetch = require("isomorphic-fetch");

var requestPromise = fetch('https://jsonplaceholder.typicode.com/posts/1');

requestPromise
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(e=> console.log(e));
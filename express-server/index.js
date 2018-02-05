const path = require('path');

const express = require('express');
const app = express();

app.get('/', (req, res) => { 
    res.send('Hello World!') 
});

app.get('/a', (req, res) => { 
    res.send('<h1>html</h1>') 
});

app.get('/express', (req, res) => { 
    res.sendFile(path.resolve(__dirname, "index.html"));  
});

app.get('/user', (req, res) => {
    const {username} = req.query; 
    res.send(`Hi ${username}`); 
});

app.listen(4000, () => console.log('Example app listening on port 4000!'))
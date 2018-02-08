const path = require('path');

const express = require('express');
const app = express();

var students = [
	{
		id: 0,
		name: "Jon"
	},
	{
		id: 1,
		name: "Ann"
	},
	{
		id:2,
		name:"Jane"
	}
]

app.get('/students', function(req,res){
	res.send(students);
})

app.get('/students/:id', function(req,res){
	var student = students.find(function(student){
		return student.id == Number(req.params.id);
	});
	res.send(student);
})

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

app.listen(3251, () => console.log('Example app listening on port 3251!'))
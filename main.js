var data = require('./data.json');

function Person(name,surname){
    this.name = name,
    this.surname = surname
}

Person.prototype.sayHello = function(){
    console.log("Hello my name is " + this.name + " " + this.surname  + ",I am " + data.age + " years old.");
}

exports.Person = Person;
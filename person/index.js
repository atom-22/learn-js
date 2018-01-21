
//module

console.log(module);

function Person(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}

Person.prototype.sayHello = function(){
    console.log("Hello my name is " + this.name + " " + this.surname  + ",I am " + this.age + " years old.");
}

//modeule.exports.Person = Person;
//exports.Person = Person
//this.Person = Person;

module.exports = Person;
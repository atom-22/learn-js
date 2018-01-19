var data = require('./personData.json');

func = require('./func.js');

var arr1 = [3,2,4,8,-10,56,2,45,8,6];
getMax(12,15,2,48,5);
getMin(arr1);

console.log(data);

function Person(name,surname){
    this.name = name,
    this.surname = surname
}


Person.prototype.sayHello = function(){
    return "Hello my name is " + this.name + " " + this.surname  + ",I am " + data.age + " years old.";
}
var es = new Person("Atom","Ulikhanyan");

console.log(es.sayHello());

exports.Person = Person;
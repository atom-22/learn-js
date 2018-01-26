//--js moduls]
var User = require('./user').User;
var car = require('./car.js');
var Person = require('./person');
require('./globalFunctions.js');

var _ = require('lodash');

// ---json moduls import

// during require process parses the json module into js onbject
// no need to write extecntion '.json'
var data = require('./data.json'); 

var atom = new User('Atom');
atom.sayName();
var seroj = new User('Seroj');
var Car = car.Car;
seroj.car = new Car('Nissan');

var me = new Person(data.name,data.surname,data.age);
me.sayHello();

console.log(JSON.stringify(seroj));

var arr1 = [3,2,4,8,-10,56,2,45,8,6];

getMax(12,15,2,48,5);

getMin(arr1);

//--global methods
require('./utils');
console.log(add(7,7));

console.log(data.lang);


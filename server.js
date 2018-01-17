//--js moduls]
var User = require('./user').User;
var car = require('./car.js')
let atom = new User('Atom');
atom.sayName();
let seroj = new User('Seroj');
var Car = car.Car;
seroj.car = new Car('Nissan');

console.log(JSON.stringify(seroj));

//--global methods
require('./utils');
console.log(add(7,7));

//---json moduls import
// during require process parses the json module into js onbject
// no need to write extecntion '.json'
var data = require('./data.json'); 

console.log(data.lang);



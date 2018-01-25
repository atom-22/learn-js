let Util = require('util');

//console.log(Util.format("my name is: %s and my surname is: %s, may age is", "Atom", "Ulikhanyan" ));

// util.format('%s:%s', 'foo', 'bar', 'baz');

//console.log("my name is: %s and my surname is: %s, may age is", "Atom", "Ulikhanyan", "sdsdsdsds" );


//teplate string
let str = 'template';
//console.log(`this is ${str} string`);


var user = {
    age : 22, 
    gender : 'male',
    name : 'Atom'  
}

user.self = user;

//console.log(user);


//# Util.inherits

function Animal(){
    this.geolocation = 'Africa';
} 

// Animal.prototype.getGeo = function(){
//     return this.geolocation;
// }

function Tiger(name) {
    this.name = name;
}

Tiger.prototype.getName  = function(){
    return this.name;
}

Util.inherits(Animal , Tiger)
let tig = new Tiger('Seroj');
console.log(tig.getName());
console.log(tig.geolocation);
console.log( tig instanceof Tiger);
console.log( tig instanceof Animal);

//console mouduel
// global.console.log("sdsd") == console.info()

//console.error() == console.warn()

console.error('error!!')















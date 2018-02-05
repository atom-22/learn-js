// bind  --> Function.prototype.bind  //ES5
// call  --> Function.prototype.call 
// apply --> Function.prototype.apply

// call 

function foo() {
    console.log('foo is called');
}

foo();

foo.call()

var user = {
    name : 'John',
    surname : "Doe",
    sayName: function(){
        console.log('My name is ' , this.name);
        console.log('My surname is ', this.surname)
    },
    logMessage: function(mess){
      console.log("--" + this.name + "--");  
      console.log(mess);
      console.log(arguments);
    }
}

user.sayName();
user.logMessage('some message');


var otherUser = {
    name : 'Jane'
}

user.sayName.call(otherUser);
user.sayName.call({name: 'Atom'});

user.logMessage.call(otherUser, "other message", "test", 1);

//apply
console.log('----------');
user.logMessage.apply(otherUser, ["other message", "test", 1]);


console.log('------------------------');

//bind
function bar(){
    console.log('the bar function is called');
    console.log(this.funcName);
    console.log(arguments);

}

var baz  = bar.bind({ funcName : 'some name'}, "a", "b", "c");
baz();

var bindOfSayName = user.sayName.bind(otherUser);
// bindOfSayName();


// the coll thing

console.log('----------arrow--------------');
const arrowFoo = ()=> console.log(this.prop);
var context = {prop : "some prop"};
arrowFoo.call(context);

// 

var person  = {
    name : 'Atom',
    surname : 'Ulikhanyan',
    sayName : function(){
       console.log(this.name);
       
       let foo = function(){
          console.log('the inner function foo is called');
          console.log(this.surname);
       } 
       
       foo();
    } 
}

console.log("***************************");
person.sayName();

// the old school way

var person  = {
    name : 'Atom',
    surname : 'Ulikhanyan',
    sayName : function(){
       console.log(this.name);
       let self = this;
       let foo = function(){
          console.log('the inner function foo is called');
          console.log(self.surname);
       } 
       
       foo();
    } 
}
person.sayName();

// the es6
var person  = {
    name : 'Atom',
    surname : 'Ulikhanyan',
    sayName : ()=>{
       console.log(this.name);
       let foo = function(){
          console.log('the inner function foo is called');
          console.log(this.surname);
       } 
       foo();
    } 
}
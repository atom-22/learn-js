function User(name) {
    this.name = name;
}

User.prototype.sayName = function(){
    console.log('Hi, my name is ' + this.name);
}
exports.User  = User;

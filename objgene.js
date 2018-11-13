var person = new Object();

person.name = 'Lee';
person.gender = 'male';
person.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
};

console.log(typeof person);
console.log(person);

person.sayHello();
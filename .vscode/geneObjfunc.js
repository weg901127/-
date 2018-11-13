// function Person(name , gender){
//     this.name = name;
//     this.gender = gender;
//     this.sayHello = function(){
//         console.log('Hi! My name is ' + this.name);
//     };

// }

// var person1 = new Person('Lee','male');
// var person2 = new Person('Kim', 'female');

// console.log('person1: ', typeof person1);
// console.log('person2: ', typeof person2);
// console.log('person1: ', person1);
// console.log('person2: ', person2);
// console.log(person1.married);
// // person1.sayHello();
// // person2.sayHello();

var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b);    // 1  10
console.log(a === b); // false
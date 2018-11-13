// var student = {
//     name: 'Lee',
//     score: 90
//   };
  
//   // student에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.
//   console.log(student.hasOwnProperty('name')); // true
  
//   console.dir(student);
//   console.dir('---------------------');
//   function Person(name) {
//     this.name = name;
//   }
  
//   var foo = new Person('Lee');
  
//   console.dir(Person); // prototype 프로퍼티가 있다.
//   console.dir(foo);    // prototype 프로퍼티가 없다.

//   console.dir('---------------------');

//   console.log(Person.__proto__ === Function.prototype);
//   console.log(Person.prototype === foo.__proto__);

//   console.dir('---------------------');

//   var person = {
//     name: 'Lee',
//     gender: 'male',
//     sayHello: function(){
//       console.log('Hi! my name is ' + this.name);
//     }
//   };
  
//   console.dir(person);
  
//   console.log(person.__proto__ === Object.prototype);   // ① true
//   console.log(Object.prototype.constructor === Object); // ② true
//   console.log(Object.__proto__ === Function.prototype); // ③ true
//   console.log(Function.prototype.__proto__ === Object.prototype); // ④ true

  function Person(name) {
    this.name = name;
  }
  
  var foo = new Person('Lee');
  
  Person.prototype.sayHello = function(){
    console.log('Hi! my name is ' + this.name);
  };
  
  foo.sayHello();
  console.dir(foo.__proto__);
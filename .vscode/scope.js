// var x = 'global';

// function foo () {
//   var x = 'function scope';
//   console.log(x);
// }

// foo(); // ?
// console.log(x); // ?

// var x = 0;
// {
//   var x = 1;
//   console.log(x); // 1
// }
// console.log(x);   // 1

// let y = 0;
// {
//   let y = 1;
//   console.log(y); // 1
// }
// console.log(y);   // 0

// var x = 'global';

// function foo() {
//   var x = 'local';
//   console.log(x);
// }

// foo();          // local
// console.log(x); // global

// var x = 'global';

// function foo() {
//   var x = 'local';
//   console.log(x);

//   function bar() {  // 내부함수
//     console.log(x); // ?
//   }

//   bar();
// }
// foo();
// console.log(x); // ?

// var x = 10;

// function foo() {
//   x = 100;
//   console.log(x);
// }
// foo();
// console.log(x); // ?

(function () {
    var MYAPP = {};
  
    MYAPP.student = {
      name: 'Lee',
      gender: 'male'
    };
  
    console.log(MYAPP.student.name);
  }());
  
  //console.log(MYAPP.student.name);
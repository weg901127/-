// function Person(name) {
//   // new없이 호출하는 경우, 전역객체에 name 프로퍼티를 추가
//   this.name = name;
// };

// // 일반 함수로서 호출되었기 때문에 객체를 암묵적으로 생성하여 반환하지 않는다.
// // 일반 함수의 this는 전역객체를 가리킨다.
// var me = Person('Lee');

// console.log(me); // undefined
// console.log(window.name); // Lee

function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function(callback) {
  if(typeof callback == 'function') {
    // --------- 1
    callback.call(this);
  }
};

function foo() {
  console.log(this.name); // --------- 2
}

var p = new Person('Lee');
p.doSomething(foo);  // undefined
console.log(Person.prototype.doSomething);
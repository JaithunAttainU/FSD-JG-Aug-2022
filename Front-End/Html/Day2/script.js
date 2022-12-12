console.log(studentName) //Undefined
var studentName;
let batchName;
const address = 10;
console.log(batchName) //Error



// let num1 = 20;
// let num2 = 30;
// var num3 = 50

// if (true) {
//   let num1 = 10;
//   let num2 = 20;
//   var num3 = 100;
//   console.log(num1) //10
//   console.log(num2) //20
//   console.log(num3) //100
// }

// console.log(num1) //20
// console.log(num2) //30
// console.log(num3) //100

var sum = () => {
  console.log("Hello")
}


//Currying

function add(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3
    }
  }
}

add()
// const returnedFunc = add(1)
// returnedFunc(4)
add(1)(5)(1)

add()
add(3)()
add(4)(5)()
add(5)(1)(7)()

function add(num1) {
  return function (num2) {
    if (num2) {
      return add(num1 + num2)
    } else {
      return num1
    }
  }
}












function add(num1) {

  return function (num2) {
    if (num2) {
      return add(num1 + num2)
    } else {
      return num1
    }
  }
}


// var name = 'Ganesh'

// function printName() {
//   console.log(name) //Ganesh
// }
// printName()











// var a = 1;
// function b() {
//   console.log(a);
//   a = 10;
//   return;
//   function a() {
//     console.log("doSomething")
//   }
// }
// b();
// console.log(a);

var personObj1 = {
  studentName: 'Megha',
  address: 'Delhi',
  getName: () => {
    console.log("Name is " + this.studentName, "Address is" + this.address) //Megha
  }
}

personObj1.getName()


var studentName = 'Ashwin'
var personObj1 = {
  studentName: 'Megha',
  hobbies: ['drawing', 'playing', 'writing'],
  address: 'Delhi',
  getName: function () {
    console.log("Name is " + this.studentName, "Address is" + this.address) //Name is Megha Address is Delhi
    this.hobbies.forEach((hobby) => {
      console.log(this.studentName + "'s hobby is" + hobby) //Megha's hobby is drawing
    })
  }
}

personObj1.getName()

var hobbies = ['drawing', 'playing', 'writing']
hobbies.forEach(function (hobby) {
  console.log(hobby)
})



function add(num1, num2) {
  //
}
add()



// var personObj2 = {
//   name: 'Varun',
//   address: 'Nepal',
//   greet: function () {
//     console.log("Hello" + this.name) //Megha
//   }
// }

// personObj1.getName() //Name is Megha Address is Delhi
// personObj1.getName.call(personObj2) //Name is Varun Address is Nepal

// personObj2.greet() //Hello Varun

// personObj2.greet.call(personObj1)

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

// //can do in var
// var name = 'Shivam'
// var name = 'Abhay'

// let age = 25
// let age = 30

function getName() {
  console.log(this.firstName)
}

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

Person.prototype.getName = getName
Person2.prototype.getName = getName


function Person() {
  this.firstName = firstName;
  this.lastName = lastName;
}


const student1 = new Person('Aziza', 'Farooqui')

Array
Function

/************************************************************
 * Variables and data types
 */

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// var _3years = 3;
// var johnMark = 'John and Mark';

///////////////////////////////////////////////////////////////////
// Variable mutation and type coercion
//

// var firstName = 'John';
// var age = 28;

// // Type coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// // Variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// var lastName = prompt('What is his last Name?')
// console.log(firstName + ' ' + lastName);

///////////////////////////////////////////////////////////////////
// Basic operators
//
var now, yearVictor, yearMark;
now = 2020;
ageVictor = 27;
ageMark = 33;

// Math operators
yearVictor = now - ageVictor;
yearMark = now - ageMark;

console.log('yearVictor', yearVictor);

console.log('now + 2', now + 2);
console.log('now * 2', now * 2);
console.log('now / 10', now / 10);

// Logical operators
var victorOlder = ageVictor < ageMark;
console.log(victorOlder)

// typeof operator
console.log(typeof victorOlder)
console.log(typeof ageVictor)
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
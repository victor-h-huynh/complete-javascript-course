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

// var now, yearVictor, yearMark;
// now = 2020;
// ageVictor = 27;
// ageMark = 33;

// // Math operators
// yearVictor = now - ageVictor;
// yearMark = now - ageMark;

// console.log('yearVictor', yearVictor);

// console.log('now + 2', now + 2);
// console.log('now * 2', now * 2);
// console.log('now / 10', now / 10);

// // Logical operators
// var victorOlder = ageVictor < ageMark;
// console.log(victorOlder)

// // typeof operator
// console.log(typeof victorOlder)
// console.log(typeof ageVictor)
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

///////////////////////////////////////////////////////////////////
// Operator precendence
//

// var now = 2020;
// var yearVictor = 1993;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearVictor >= fullAge; // true
// console.log('isFullAge?', isFullAge)

// // Grouping
// var ageVictor = now - yearVictor;
// var ageMark = 35;
// var average = (ageVictor + ageMark) / 2;
// console.log(average);

// // Multiple assignments 
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// x *= 2; // 52
// console.log(x);
// x += 10; // 62
// console.log(x);
// x--; // 61
// console.log(x);

///////////////////////////////////////////////////////////////////
// CODING SOLUTION 1
//

// var markMass = 78;
// var markHeight = 1.69;
// var johnMass = 92;
// var johnHeight = 1.95;

// var markBMI = markMass / markHeight**2
// var johnBMI = johnMass / johnHeight**2

// var isMarkBMIHigher = markBMI > johnBMI;

// console.log('Mark BMI:', markBMI)
// console.log('John BMI:', johnBMI)
// console.log(`Is Mark's BMI higher than John's?`, isMarkBMIHigher);

///////////////////////////////////////////////////////////////////
// If / else statements
//

// var firstName = 'John';
// var civilStatus = 'Single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will marry soon!')
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will marry soon!');
// }

// var markMass = 78;
// var markHeight = 1.69;
// var johnMass = 92;
// var johnHeight = 1.95;

// var markBMI = markMass / markHeight**2
// var johnBMI = johnMass / johnHeight**2

// var isMarkBMIHigher = markBMI > johnBMI;

// console.log('Mark BMI:', markBMI)
// console.log('John BMI:', johnBMI)

// if (markBMI > johnBMI) {
//     console.log('Mark\s BMI is higher than John\s')
// } else {
//     console.log('John\s BMI is higher than Mark\s')
// }

///////////////////////////////////////////////////////////////////
// Boolean Logic
//

// var firstName = 'John';
// var age = 20;

// if(age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName = ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName = ' is a young man.')
// } else {
//     console.log(firstName = ' is a man.')
// }

///////////////////////////////////////////////////////////////////
// The Ternary Operator and Switch Statement
//

// var firstName = 'John'
// var age = 30;

// Ternary operator

// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// function canDrink (age) {
//     let drink;
//     if (age >= 18) {
//         drink = 'beer'
//     } else {
//         drink = 'juice'
//     }
//     return drink;
// }

// console.log(canDrink(16))

// const firstName = 'John'
// const age = 22;

// let canDrink = age >= 18 ? firstName + ' drinks beer' : firstName + ' drinks juice';

// console.log(canDrink)

// Switch statement
// var firstName = 'Victor'
// var job = 'instructor';

// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' is a teacher.');
//         break;
//     case 'driver':
//         console.log(firstName + ' is a driver');
//         break;
//     case 'designer':
//         console.log(firstName + ' is a designer');
//         break;
//     default:
//         console.log(firstName + ' is something else');
// }

// switch (true) {
//     case age < 13: 
//         console.log(firstName + ' is age boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.')
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.')
//         break;
//     default: 
//         console.log(firstName + ' is a man.')
// } 

/////////////////////////////////////////////////////////////////
// Truthy and Falsy values and equality operators


// falsy values: undefined, null, 0, '', NaN
// truth values: NOT falsy values

// var height;

// height = 23;

// if(height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has NOT been defined');
// }

// if (height === '23') {
//     console.log('The == operator does type coercion!');
// }

// const something = function something(name) {
//     console.log(name)
// }

// const something = (name) => {
//     console.log(name)
// }

// Figure 1 is it the same as figure 2
// const something = (name) => {
//     doThing(name)
// }

// const doThing = () => {
//     console.log("Victor")
// }

// doThing()

// Figure 2
// const something = () => doSomething() 

// const something = param => doSomething(param)


// setTimeout ES5
// setTimeout(function() {
//     console.log('I promised to run after 1s')
//     setTimeout(function() {
//         console.log('I promised to run after 2s')
//     }, 1000)
// }, 1000)

// First form
// const somethingB = () => {
//     console.log('Something')
// }

// Second form adding a Promise object
// isPromise is the same as const something. It's the way it's structured
// const isPromise = () => {
//     return new Promise((resolve, reject) => {
        
//     })
// }

// Has an implicit return but structured differently
// const something = () => new Promise((resolve, reject) => {
//     doThing()
//     setTimeout(resolve, 1000)
// })

// Using a simple version of Promise using wait and then

// 1st Constructing the Promise
// const wait = (seconds) => new Promise((resolve, reject) => {
//     const timer = seconds * 1000
//     setTimeout(resolve, timer)
// })

// // Wait() runs 2nd
// wait(1).then(() => {
//     console.log('I promised to run after 1s')
//     return wait()
// })
// .then(() => console.log('I promised to run after 2s'))
// .catch(() => console.log('Rejected statement'))

// let done = true
// const isItDoneYet = new Promise ((resolve, reject) => {
//     if(done) {
//         const workDone = 'Here is the thing I built'
//         resolve(workDone)
//     } else {
//         const why = 'Still working on something else'
//         reject(why)
//     }
// })

// const checkIfItsDone = () => {
//     isItDoneYet
//     .then(ok => {
//         console.log(ok)
//     })
//     .catch(err => {
//         console.error(err)
//     })
// }

// checkIfItsDone()

// const status = response => {
//     if(response.status >= 200 && response.status < 300) {
//         return Promise.resolve(response)
//     }
//     return Promise.reject(new Error(response.statusText))
// }

// const json = response => response.json()

// fetch('/todos.json')
//     .then(status)
//     .then(json)
//     .then(data => {
//         console.log('Request succeeded with JSON response', data)
//     })
//     .catch(error => {
//         console.log('Request failed', error)
//     })

//     console.log(fetch())

//     const status = response => {

//     }

//     function status (response) {
//         if (response.status >= 200 && response.status < 300) {
//             return Promise.resolve(response)
//         }
//         return Promise.reject(new Error(response.statusText))
//     }

    /////////////////////////////////////////////////////////////////
// Coding Challenge 2

// var teamJohn = (89 + 120 + 103) / 3
// var teamMike = (116 + 94 + 123) / 3
// var teamMary = (97 + 134 + 105) / 3

// if (teamMary > teamMike && teamJohn) {
//     console.log('team Mary is the winner with ' + teamMary)
// } else if (teamJohn > teamMike && teamMary) {
//     console.log('team John is the winner with ' + teamJohn) 
// } else if (teamMike > teamJohn && teamMary) 
//     console.log('team Mike is the winner with ' + teamMike)
// else {
//     console.log('tie game')
// }

    /////////////////////////////////////////////////////////////////
// Functions

// function calculateAge(birthYear) {
//     return 2020 - birthYear
// }

// var ageMike = calculateAge(1990)
// var ageJohn = calculateAge(1996)
// var ageVictor = calculateAge(1993)

// console.log(ageMike, ageJohn, ageVictor)

// function yearsUntilRetirement(year, firstName) {
//     var remainingYear = 65 - year
//     if (remainingYear > 0) {
//         console.log(firstName + ' will retire in ' + remainingYear)
//     } else {
//         console.log(firstName + ' has retired.')
//     }
    
// }

// yearsUntilRetirement(ageVictor, 'Victor')

/////////////////////////////////////////////////////////////////
// Functions
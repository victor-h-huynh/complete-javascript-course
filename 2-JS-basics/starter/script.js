/************************************************************
 * Variables and data types
 */

// var firstName = 'John';
// firstName = 'Maggie'
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

// Math operators
// yearVictor = now - ageVictor;
// yearMark = now - ageMark;

// console.log('yearVictor', yearVictor)

// console.log('now + 2', now + 2);
// console.log('now * 2', now * 2);
// console.log('now / 10', now / 10);

// // // Logical operators
// var victorOlder = ageVictor < ageMark;
// console.log(victorOlder)

// typeof operator
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
// var isFullAge = 2020 - 1993 >= 18; // true
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
// var x = 5
// x = x * 2
// console.log(x)
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x--; // 61
// x++;
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
// Function Statements and Expressions

// Function declaration
// function whatDoYouDo(job, firstName) {

//}

// Function express

// The difference between function express vs function declaration is function express always returns a value

// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'Victor'))
// console.log(whatDoYouDo('driver', 'Matt'))
// console.log(whatDoYouDo('designer', 'Chris'))
// console.log(whatDoYouDo('cook', 'Joseph'))

/////////////////////////////////////////////////////////////////
// Arrays

// Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, true, 'Matt')

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names)

// // Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false]

// john.push('blue');
// john.unshift('Mr.')
// console.log(john)

// john.pop();
// john.pop();
// john.shift();
// console.log(john)

// console.log(john.indexOf(23));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
// console.log(isDesigner)

// var bills = [124, 48, 268]
// var tips = [];
// var finalBill = [];

// function calculateBills (total) {
//     for(var i = 0; i < total.length; i++) {
//         if(total[i] <= 50) {
//             tips.push(total[i] * 0.2)
//         } else if (total[i] <= 200) {
//             tips.push(total[i] * 0.15)
//         } else {
//             tips.push(total[i] * 0.1)
//         }
//         finalBill.push(tips[i] + bills[i])
//     }
// }

// console.log(calculateBills(bills))
// console.log(tips)
// console.log(finalBill)

/////////////////////////////////////////////////////////////////
// Objects and properties

// Object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: [['Jane', 'Mark'],['Bob', 'Emily']],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john);
// john.firstName = 21;
// john.family[1][1] = 'Victor'
// john.isMarried = true
// console.log(john);

// // new Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane)

/////////////////////////////////////////////////////////////////
// Objects and methods

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calculateAge: function() {
//         this.age = 2020 - this.birthYear;
//     }
// };

// john.calculateAge()
// console.log(john)

/////////////////////////////////////////////////////////////////
// Coding Challenge 4

// var john = {
//     firstName: 'John',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// }

// var mark = {
//     firstName: 'Mark',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// }

// var johnBMI = john.calcBMI();
// console.log(john);

// var markBMI = mark.calcBMI()
// console.log(mark);

// if(johnBMI > markBMI) {
//     console.log(john.firstName + ' BMI is higher of' + john.BMI)
// } else {
//     console.log(mark.firstName + ' BMI is higher of ' + john.BMI)
// }

/////////////////////////////////////////////////////////////////
// Loops and iteration

// for loop
// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'designer', false];

// for (var i = 0; i < john.length; i++) {
//     console.log(john[i])
// }


// // While loop
// var i = 0;
// while(i < john.length) {
//     console.log(john[i])
//     i++
// }

// Continue and break statements
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// for (var i = 0; i < john.length; i++) {
//     if(typeof john[i] != 'string') {
//         continue;
//     }
//     console.log('Continue statement', john[i])
// }

// for (var i = 0; i < john.length; i++) {
//     if(typeof john[i] != 'string') {
//         break;
//     }
//     console.log('Break statement', john[i])
// }

// for(var i = john.length - 1; i >= 0; i--) {
//     console.log('Reverse loop', john[i])
// }

/////////////////////////////////////////////////////////////////
// Coding Challenge 5

// var billJohn = {
//     tip: [],
//     total: [],
//     amount: [124, 48, 268, 180, 42],
//     calcTip: function() {
//         for(var i = 0; i < this.amount.length; i++) {
//             var percentage;
//             var bill = this.amount[i]
//             if(bill < 50) {
//                 percentage = 0.2
//                 this.tip.push(bill * percentage)
//             } else if(bill < 200) {
//                 percentage = 0.15
//                 this.tip.push(bill * percentage)
//             } else {
//                 percentage = 0.1
//                 this.tip.push(bill * percentage)
//             }
//             this.total.push(this.tip[i] + bill)
//         }
//     }
// }

// billJohn.calcTip();
// console.log(billJohn)

// var billMark = {
//     tip: [],
//     total: [],
//     amount: [77, 475, 110, 45],
//     calcTip: function() {
//         for(var i = 0; i < this.amount.length; i++) {
//             var percentage;
//             var bill = this.amount[i]
//             if(bill < 100) {
//                 percentage = 0.2
//                 this.tip.push(bill * percentage)
//             } else if(bill < 300) {
//                 percentage = 0.1
//                 this.tip.push(bill * 0.1)
//             } else {
//                 percentage = 0.25
//                 this.tip.push(bill * 0.25)
//             }
//             this.total.push(this.tip[i] + bill)
//         }
//     }
// }

// function calculateAvg (tip) {
//     var totalAverage = 0;
//     for(var i = 0; i < tip.length; i++) {
//         totalAverage = totalAverage + tip[i];
//     }
//     return totalAverage / tip.length
// }

// billMark.calcTip();
// console.log(billMark)

// billJohn.average = calculateAvg(billJohn.tip)
// billMark.average = calculateAvg(billMark.tip)

// if (billJohn.average > billMark.average) {
//     console.log('bill John is higher with ' + billJohn.average)
// } else {
//     console.log('bill Mark is higher with ' + billMark.average)
// }

/*
    John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
    John likes to tip 20% of the bill when the bill is less than $50,
    15% when the bill is between $50 and $200
    10% when the bill is more $200

    Implement a tip calculator using objects and loops:
    1) Create an object with an array for the bill values
    2) Add a method to calculate the tip
    3) This method should include a loop to iterate over all the paid bills and do the tip calculation
    4) As an output, create 1) a new array containing all tips, and 2) an array containng final paid amounts ( bill + tip ). HINT: Start with two empty arrays [] 
    as properties and then fill them up in the loop.
    5) Implement the same functionality as before, this time using Mark's tipping rules
    
    EXTRA: Mark's family also went on the holiday, going to 4 different restaurants. The bills were: $77, $375, $110 and $45
    Mark likes to tip 20% of the bill when the bill is less than $100.
    10% when the bill is between $100 and $300
    25% if the bill is more than $300


    6) Create a function(not a method) to calculate the average of a given array of tips. HINT: Loops over the array, and in each iteration store the current sum in a variable(starting from 0).
    After you have the sum of the array, divide it by the number of elements in it(that's how you calculate the average)
    7) Calculate the average tip for each family
    8) Log to the console which family paid the highest tips of average
*/

// const billJohn = {
//     tips: [],
//     finalValue: [],
//     bills: [124, 48, 268, 180, 42],
//     calcTip: function() {
//         let percentage;
//         for(let i = 0; i < this.bills.length; i++) {
//             if(this.bills[i] < 50) {
//                 percentage = .2
//             } else if (this.bills[i] < 200) {
//                 percentage = .15
//             } else {
//                 percentage = .1
//             }
//             this.tips.push(this.bills[i] * percentage)
//             this.finalValue.push(this.bills[i] + this.tips[i])
//         }
//     },
//     calcTotal: function() {
//         let finalTotal = 0;
//         // return this.bills.reduce((accumulator, currentValue) => accumulator + currentValue, 10);
//         for (let i = 0; i < this.bills.length; i++) {
//             finalTotal += this.bills[i]    
//         }
//         return finalTotal + 10;
//     }
// }

// billJohn.calcTip();
// console.log('calcTotal', billJohn.calcTotal());
// console.log(billJohn);

// const billMark = {
//     tips: [],
//     finalValue: [],
//     bills: [77, 375, 110, 45],
//     calcTip: function() {
//         for(let i = 0; i < this.bills[i]; i++) {
//             let percentage = 0;
//             if (this.bills[i] < 100) {
//                 percentage = .2;
//             } else if(this.bills[i] < 300) {
//                 percentage = .1
//             } else {
//                 percentage = .25
//             }
//             this.tips.push(this.bills[i] * percentage)
//             this.finalValue.push(this.bills[i] + this.tips[i])
//         }
//     }
// }

// billMark.calcTip();
// console.log(billMark)

// function calcAvg (tipTotal) {
//     let avgTip = 0
//     for(let i = 0; i < tipTotal.length; i++) {
//         avgTip += tipTotal[i];
        
//     }
//     avgTip /= tipTotal.length
//     return avgTip;

//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     return tipTotal.reduce(reducer) / tipTotal.length
// }

// // first 
// accumulator = 10;
// currentValue = 124;
// return = 134
// // second
// accumulator = 134;
// currentValue = 48;
// return = 182

// // third 
// accumulator = 182
// currentValue = 268
// return = 450

// // fourth
// accumulator = 450
// currentValue = 180
// return = 630

// // fifth
// accumulator = 630
// currentValue = 42
// return = 672

/////////////////////////////////////////////////////////////////
// Lecture: Hoisting

// functions
// calculateAge(1965);

// function calculateAge(year) {
//     console.log(2016 - year);
// }

// // retirement(1956);
// var retirement = function(year) {
//     console.log(65 - (2016 - year));
// }

// // variables
// console.log(age);
// var age = 23;

// function foo() {
//     console.log(age);
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);

/////////////////////////////////////////////////////////////////
// Lecture: Scoping

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third();
//     }
// }

// function third() {
//     var d = 'John';
//     // console.log(c)
//     console.log(a + d);
// }

/////////////////////////////////////////////////////////////////
// Lecture: The this keyword

// console.log(this)

// calculateAge(1985);

// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     calculateAge: function() {
//         console.log(this);
//         console.log(2016 - this.yearOfBirth);

//         // function innerFunction() {
//         //     console.log(this);
//         // }
//         // innerFunction();
//     }
// }

// john.calculateAge();

// var mike = {
//     name: 'Mike',
//     yearOfBirth: 1984
// };

// mike.calculateAge = john.calculateAge;
// mike.calculateAge();

/////////////////////////////////////////////////////////////////
// Array Methods: Filter, Map

const items = [
    { name: 'Bike', price: 100},
    { name: 'TV', price: 200},
    { name: 'Album', price: 10},
    { name: 'Book', price: 5},
    { name: 'Phone', price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25}
]

// Filter
// const itemFiltered = items.filter((item) => {
//     return item.price <= 100
// })

// console.log(itemFiltered);

// Map
// const itemNames = items.map((item) => {
//     return item.name
// })

// console.log(itemNames);

// const itemPrices = items.map((item) => {
//     return item.price
// })

// console.log(itemPrices);

// Find
// const foundItem = items.find((item) => {
//     return item.name === 'Book'
// })

// console.log(foundItem);

// ForEach

// items.forEach((item) => {
//     console.log(item.name)
// })

// Reduce

const total = items.reduce((currentValue, item) => {
    return currentValue + item.price
}, 0)

console.log(total)
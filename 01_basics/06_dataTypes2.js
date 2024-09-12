// Data Types are classified into two types on the basis of how they are stored in the memory:

// -------> 1. Primitive Data Types (Call by Value or Value Types)

// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// JavaScript is a dynamically typed language, which means that you don't have to specify the data type of the variable when you declare it. The data type of the variable is determined by the value you assign to it.
// const a = 5;
// const b = 5.5;
// const c = false; 
// const d = null; // null is an object
// const e = undefined; // same as const e;


// If same value is passed to two different variables using Symbol, then they are not equal.
// const id = Symbol('123')
// const accountId = Symbol('123')
// console.log(id === accountId) // false
// console.log(id == accountId) // false

// let bigNumber = 1234567890123456789012345678901234567890n; // data type is BigInt
// console.log(bigNumber);
// console.log(typeof bigNumber); // bigint


// -----> 2. Non-Primitive Data Types (Call by Reference or Reference Types). It always returnds object.

// 1. Array

// let heroes = ["Superman", "Batman", "Ironman"];
// console.log(typeof heroes); // object

// 2. Objects

// let myObj = {
//     name: "John",
//     age: 25,
//     isEmployed: true
// }
// console.log(typeof myObj); // object

// 3. Functions // returns function & function object

// const myFunction = function greet() {
//     console.log("Hello World");
// }

// console.log(typeof myFunction); // function
// console.log(myFunction); // [Function: greet]


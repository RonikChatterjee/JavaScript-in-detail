"use strict"; // treat all js code as new version
// alert("Hello, world!"); // can be used in browser or html file but not in node.js
console.log('Hello, world!');

let name = "Ronik"; // String Datatype
let age = 21; // Number Datatype
let isApproved = true; // Boolean Datatype
let isLoggedIn = false; // Boolean Datatype


// Number => max range = 2^53 - 1
// BigInt => number greated than the range of Number
// String => '', "", ``
// Boolean => true/false
// undefined => no value
// null => empty value or stand alone value
// Symbol => unique value
// Object => key-value pair // Will be discussed in details letter


// typeof operator => typeof variableName or typeof(variableName)
console.log(typeof name); // String
console.log(typeof "Ronik"); // String
console.log(typeof null); // Object
console.log(typeof undefined); // Undefined
console.log(typeof (age)); // Number
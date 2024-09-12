// 2 ways of declaring numbers :

const score = 400
// console.log(score) // 400

const balance = new Number(100)
// console.log(balance) // [Number: 100]

// Number methods :

// 1. .toString() : converts a number to a string
// console.log(balance.toString()) // 100
// console.log(balance.toString().length) // 3

// 2. .toFixed() : returns a string, with the number written with a specified number of decimals
// console.log(balance.toFixed(2)) // 100.00 -> essentially used in e-commerce websites

// 3. .toPrecision() : returns a string, with a number written with a specified length (it means roundoff the number to the specified length)
const anotherNumber = 23.8966
const anotherNumber2 = 123.8966
const anotherNumber3 = 123.4999
const anotherNumber4 = 1123.8966
// console.log(anotherNumber.toPrecision(3)) // 23.9
// console.log(anotherNumber2.toPrecision(3)) // 124
// console.log(anotherNumber3.toPrecision(3)) // 123
// console.log(anotherNumber4.toPrecision(3)) // 1.12e+3 -> special case

// 4. .toLocaleString() : formats the number into a string using a local specific format.
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-US')) // 1,000,000 -> Basically it follows the US format.
// console.log(hundreds.toLocaleString('en-IN')) // 10,00,000 -> Indian format

// Number.MAX_VALUE : returns the largest number possible in JavaScript
// console.log(Number.MAX_VALUE) // 1.7976931348623157e+308

// Number.MIN_VALUE : returns the smallest number possible in JavaScript
// console.log(Number.MIN_VALUE) // 5e-324

// Number.MAX_SAFE_INTEGER : returns the largest safe integer in JavaScript
// console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

// Number.MIN_SAFE_INTEGER : returns the smallest safe integer in JavaScript
// console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// Number.POSITIVE_INFINITY : represents infinity (returned on overflow)
// console.log(Number.POSITIVE_INFINITY) // Infinity

// Number.NEGATIVE_INFINITY : represents negative infinity (returned on overflow)
// console.log(Number.NEGATIVE_INFINITY) // -Infinity


// ********************************MATHS********************************

// console.log(Math.abs(-4.7)) // 4.7 -> returns the absolute value of a number

// console.log(Math.round(4.5)) // 5 -> rounds a number to the nearest integer
// console.log(Math.round(4.4)) // 4

// Math.ceil : means ceiling i.e. static method always rounds up and returns the smallest integer greater than or equal to a given number.
// console.log(Math.ceil(4.4)) // 5

// Math.floor : static method always rounds down and returns the largest integer less than or equal to a given number.
// console.log(Math.floor(4.7)) // 4

// Math.pow : returns the value of a number raised to the power of another number
// console.log(Math.pow(8, 2)) // 64

// Math.sqrt : returns the square root of a number
// console.log(Math.sqrt(64)) // 8

// Math.min : returns the number with the lowest value
// console.log(Math.min(0, 150, 30, 20, -8, -200)) // -200

// Math.max : returns the number with the highest value
// console.log(Math.max(0, 150, 30, 20, -8, -200)) // 150

// ***** Math.random : returns a random number between 0 (inclusive), and 1 (exclusive)
// console.log(Math.random())
// console.log(Math.random().toFixed(2))

// console.log((Math.random()*10)+1) // returns a random number between 1 and 10
// Genaric formula for a given range between min and max
const min = 10
const max = 20
// console.log(Math.random() * (max - min) + min) // returns a random number between 10(inclusive) and 20(exclusive)
// console.log(Math.floor(Math.random() * (max - min + 1) + min)) // returns a random number between 10(inclusive) and 20(inclusive)


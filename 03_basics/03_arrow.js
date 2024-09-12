// Using this keyword in function inside object
var userName = 'Ronik Chatterjee'
const user = {
    userName: 'Ronik',
    price: 999,
    welcomemassege: function () {
        console.log(`${this.userName}, Welcome to the Website`)
        console.log(this)    
    }               
}

// user.welcomemassege()
// user.userName = 'Sam'
// user.welcomemassege()
// console.log(this) // window object in browser(DOM) and '{}' in node.js
// --------------------------------------------------------------------------------------------
// Using this keyword in function outside object

// function one() {
//     let userName = 'Ronik'
//     console.log(`${userName}, Welcome to the Website`)
//     console.log(`${this.userName}, Welcome to the Website`) // undefined -> 'this.userName' is only used for object
//     console.log(this)
// }

// one() // global object
// --------------------------------------------------------------------------------------------
// Different ways to declare function

// function one() {
//     let userName = 'Ronik'
//     console.log(`${userName}, This is 1st function`)
//     console.log(`${this.userName}, This is 1st function`)
//     console.log(this)
// }

// one() // global object

// const two = function () {
//     let userName = 'Ronik'
//     console.log(`${userName}, This is 2nd function`)
//     console.log(`${this.userName}, This is 2nd function`)
//     console.log(this)
// }

// two() // global object

// Normal Arrow function
// const three = () => {
//     let userName = 'Ronik'
//     console.log(`${userName}, This is 3rd function`)
//     console.log(`${this.userName}, This is 3rd function`)
//     console.log(this)
// }

// three() // {} -> arrow function does not have its own 'this' keyword

// Explicit return Arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2, 3)) // 5

// Implicit return Arrow function
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(2, 3)) // 5

// Returnning an object using Implicit return Arrow function
// const getObj = () => (user)
// console.log(getObj()) // { userName: 'Ronik', price: 999, welcomemassege: [Function: welcomemassege] }

// --------------------------------------------------------------------------------------------
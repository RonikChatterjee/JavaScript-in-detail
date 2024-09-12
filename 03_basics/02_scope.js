const a = 100
let b = 200
var c = 300
// ----------------------------------------------------------------------------------------------
// if (true) {
//     const a = 10
//     let b = 20
//     var c = 30
// }

// console.log(a) // Error -> variable a is initialized in block(local) scope so it should not ne accessed globally, and it is also same for 'const' keyword
// console.log(b) // 20
// console.log(c) // 30 -> variable c is initialized in block(local) scope so it should not ne accessed globally, but it happen only in case of 'var'
// ----------------------------------------------------------------------------------------------

// if (true) {
//     const a = 10
//     let b = 20
//     var c = 30
// }

// Here there is no problems with the 'let' keyword because for a same variable name, the initialized value in block scope doesnot affect the value initialized in global scope
// console.log(a) // 100
// console.log(b) // 200

// console.log(c) // 30 -> variable c is first initialized in global scope and then in block scope, so when it is accessed outside the block i.e. globally, it should give the value of global scope but is polluted by the value of the block scope i.e. 30
// ----------------------------------------------------------------------------------------------
// Nested Scope

// function one() {
//     const userName = 'Ronik'
//     function two() {
//         const website = 'youtube'
//         console.log(userName) // Ronik
//     }
    // console.log(website) // Error -> variable website is initialized in block(local) scope so it should not ne accessed globally
    
//     two() // calling the inner function
// }

// one() // calling the outer function

// if (true) {
//     const userName = 'Ronik'
//     if (userName === 'Ronik') {
//         const website = ' youtube'
//         console.log(userName + website) // Ronik youtube "string concatination using '+' operator"
//     }
    // console.log(website) // Error -> variable website is initialized in block(local) scope so it should not ne accessed globally
// }
// console.log(userName) // Error -> variable userName is initialized in block(local) scope so it should not ne accessed globally
// ----------------------------------------------------------------------------------------------
// ++++++=============++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++
// console.log(addOne(5)) // 6 -> When the function is declared using 'function' keyword, it can be accessed both before and after the initialization of the function

// function addOne(num) {
//     return num + 1
// }

// console.log(addOne(5)) // 6


// console.log(addTwo(5)) // 7 -> When the function is stored in a variable, the function can only be accessed after the initialization of the variable and not before.

// const addTwo = function (num) {
//     return num + 2
// }

// console.log(addTwo(5)) // 7
// ----------------------------------------------------------------------------------------------

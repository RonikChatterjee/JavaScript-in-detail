// Immediate Invoked Function Expression (IIFE)

// Normal function
// function one() {
//     console.log("DB Connected")
// }
// one() // In this case the function call may be affected by the global scope
    
// To solve thw avove problem we can use IIFE
// (Function Defination)(Execution)
// (function two() {
//     console.log("DB Connected")
// })()
// In this case the function call is not affected by the global scope
// --------------------------------------------------------------------------------------------
// Writing an arrow function inside IIFE
(function two() {
    console.log("DB Connected")
})(); // ';' is compulsory for terminating IIFE

(() => {
    console.log("DB Connected")
})() // When there are more than one IIFE then ';' is compulsory for terminating IIFE, else it will throw an error
// --------------------------------------------------------------------------------------------

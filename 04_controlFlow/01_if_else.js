// ***********************************if***********************************
const isUserLoggedIn = true
const temperature = 41


// if (isUserLoggedIn) {

// }


// if (2 == "2") {
//     console.log("2 == '2' is true, But 2 === '2' is false")
// }


// if (temperature > 50) {
//     console.log("Temparture is greater than 50")
// } else {
//     console.log("Temperature is less than 50")
// }


// <, >, <=, >=, ==, ===, !=, !==
// --------------------------------------------------------------------------------------------

const score = 200

// When we use const and let
// if (score > 100) {
//     const power = "fly"
//     console.log(`USer power: ${power}`)
// }
// console.log(`USer power: ${power}`)


// When we use var
// if (score > 100) {
//     var power = "fly"
//     console.log(`USer power: ${power}`)
// }
// console.log(`USer power: ${power}`) // This line should not be executed
// --------------------------------------------------------------------------------------------

const balance = 1000

if (balance > 500) console.log("test"),console.log("test2"); // Implicit scope, this kind of code effect the code readability


// else if ladder
// if (balance < 500) {
//     console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }
// --------------------------------------------------------------------------------------------
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
// --------------------------------------------------------------------------------------------
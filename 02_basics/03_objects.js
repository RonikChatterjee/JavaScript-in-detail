// singleton
// Creating objects using constructor

// Objects literal -> objects are set of key value pairs
const mySym1 = Symbol("key1")
const jsUser = {
    name: "Ronik",
    "full name": "Ronik chatterjee",
    [mySym1]: "mykey1",
    age: 20,
    location: "Kolkata",
    email: "ronik@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(jsUser)
// console.log(jsUser.name)

// console.log(jsUser.full name) // Cannot access in this way -> Error: Uncaught SyntaxError: Unexpected identifier;

// console.log(jsUser["full name"])
// console.log(jsUser.age)
// console.log(jsUser.location)
// console.log(jsUser.email)
// console.log(jsUser.isLoggedIn)
// console.log(jsUser.lastLoggedIn)
// --------------------------------------------------------------------
// Accessing a symbol key from an object

// console.log(typeof [mySym1]) // object
// console.log(typeof(jsUser[mySym1])) // string
// --------------------------------------------------------------------
// Updating the values of the properties of an object

// jsUser.name = "Rohit"
// jsUser.age = 21
// jsUser.location = "Delhi"
// jsUser.email = "ronik@chatgpt.com"
// jsUser["full name"] = "Rohit Pandey"
// jsUser[mySym1] = "mykey2"

// console.log(jsUser) // Checking that the values are updated or not
// --------------------------------------------------------------------
// freezeing the object -> means after this statement we cannot update the values of the object

// Object.freeze(jsUser)
// jsUser.name = "Raj"
// console.log(jsUser.name) // Ronik
// --------------------------------------------------------------------
// Adding functions to an object

// jsUser.greeting = function () {
//     console.log("Hello, JS user")
// }

// console.log(jsUser.greeting) // [Function (anonymous)] -> gives the refference of the function but does not executes it
// jsUser.greeting() // Function executed

// jsUser.greetingTwo = function () {
//     console.log(`Hello JS use, ${this["full name"]}`)
// }

// console.log(jsUser.greetingTwo) // [Function (anonymous)]
// jsUser.greetingTwo() // Function executed

// console.log(jsUser)
// --------------------------------------------------------------------





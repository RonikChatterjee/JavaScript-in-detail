// "use strict";
const accountId = 12345 // Value cannot be changed
let accountEmail =  "ronik@gmail.com" // Can be changed & good practice for declaring variables
var accountPassword = "123456" //Not a good practice for declaring variables as it has an issue in block scope and functional scope
accountCity = "Kolkata" //Not a good practice for declaring variables but can be used in some cases

console.log(accountId) // print statement for consol

// accountId = 2 // not allowed as it is a constant variable
accountEmail = "chatterjeeronik@gmail.com"
accountPassword = "1234567"
accountCity = "Delhi"
let accountStatus; // Value is not assigned

console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus]) // print statement for console in tabular format
// Functions Definition
// function myName () {
//   console.log("R")
//   console.log("O")
//   console.log("N")
//   console.log("I")
//   console.log("K")
// }
// Function Call
// myName()
// --------------------------------------------------------------------
// Function with Parameters but no return statement

// function addTwoNumbers (num1, num2) {
//   console.log(num1 + num2)
// }

// addTwoNumbers(10, 20) // 'addTwonumbers' is an instance of the function where as 'addTwoNumbers()' is a function execution
// --------------------------------------------------------------------
// Function with Parameters and return statement

function addTwoNumbers (num1, num2) {
    // result = num1 + num2 // scope of the function inside '{}'
    // return result
    return num1 + num2
}
//   result = addTwoNumbers(10, 20)
//   console.log(`Result: ${result}`)
// --------------------------------------------------------------------

// function loginUserMassege (userName) {
//     return `${userName} Just Logged In`
// }
// console.log(loginUserMassege('Ronik'))


// function loginUserMassege (userName = 'Default User') {
//     if (userName === 'Undefined') {
//         console.log('Please Enter a Valid User Name')
//         return
//     }
//     return `${userName} -> Just Logged In`
// }
// console.log(loginUserMassege())
// --------------------------------------------------------------------
// Basically in shoping cart we have to add the product to the cart and then we have to calculate the total price of the cart

// function calculateCartPrice (...price) { // Rest Operator '...' is used to pass multiple arguments and returns an array of those number.
//     return price
// }
// console.log(calculateCartPrice(200, 300, 400))

// function calculateCartPrice (price1, price2, ...prices) { // First two values are assigned to price1 and price2 and rest of the values are assigned to prices in form of array
//     return `Prices of all products: ${price1}, ${price2} & ${prices}`
// }
// console.log(calculateCartPrice(10, 20, 30,40))
// --------------------------------------------------------------------
// Passing object to a function

// const user = {
//     userName: 'Ronik',
//     prices: 199
// }

// function handleObject (anyObject) {
//     console.log(`Username is ${anyObject.userName} and Price is ${anyObject.price}`);
//     return
// }

// Differnt ways to pass an object to a function

// handleObject(user)

// handleObject({
//     userName: 'John',
//     price: 299
// })
// --------------------------------------------------------------------
// Passing an array to a function

// const mynewArray = [10, 20, 30, 40, 50]

// function returnSecondValue (getArray) {
//     return getArray[1]
// }
// // console.log(returnSecondValue(mynewArray))
// console.log(returnSecondValue([100, 200, 300, 400, 500]))

// --------------------------------------------------------------------
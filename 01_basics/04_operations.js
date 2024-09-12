// let value = 3
// let negValue = -(value)

// console.log(negValue) // -3

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 2)
// console.log(2 / 2)
// console.log(value  % 2)

// let str1 = "Hello"
// let str2 = " Ronik"
// let str3 = str1 + str2 // String concatenation

// console.log(str3) // Hello Ronik
// console.log(str1 + str2) // Hello Ronik;

//***** NOTE: when '+' operation is performed between two different data types, 
// (i) if the 1st data type is a string, then the operation is considered as string concatenation
// (ii) if from the 2nd data type onwards, any data type is a string, except the 1st data type, then the operation is considered as string concatenation from the occurances of the string data type.*****

// console.log("1" + 2) // 12  -> String concatenation -> 12;
// console.log(1 + "2") // 12  -> String concatenation -> 12;
// console.log("1" + 2 + 2) // 12  -> String concatenation -> 122;
// console.log("1" + 2 + "2") // 12  ->  String concatenation -> 122;
// console.log(1 + 2 + "2") // 12  ->  Number addition -> 32; ;
// console.log(1 + 2 + "2" + 2) // 12  ->  Number addition -> 322;

// NOTE: console.log(3 + 4 * 5 % 3); // This type of code is only for exams. For production code, use parenthesis to make the code more readable.

// Here are some examples of code with bad readability:
// console.log(+true); // 1
// console.log(+""); // 0

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2

// --------------------------------------------------------------

// let x = 3
// let y = x++ // Post-increment -> before incrementing the value of x is assigned to y
// console.log(`x : ${x}, y : ${y}`) // x : 4, y : 3

// let a = 3
// let b = ++a // Pre-increment -> after incrementing the value of a is assigned to b
// console.log(`a : ${a}, b : ${b}`) // a : 4, b : 4

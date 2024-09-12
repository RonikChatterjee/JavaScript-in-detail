const name = "Ronik"
const repoCount = 50

// Basic string concatenation using the '+' & ',' operator which is not used in modern JS
// console.log("My name is " , name , "and I have " , repoCount , "repositories on GitHub");
// console.log("My name is " + name + " and I have " + repoCount + " repositories on GitHub");

// Print statement accourding to modern JS.
// console.log(`My name is ${name} and I have ${repoCount} repositories on GitHub`);

// String can be declared in two ways:
let string1 = "Hello World"
let string2 = new String("Hello World Ronik")
let string3 = new String("                      Hello World Ronik         ")

// console.log(string1) // Hello World
// console.log(string2) // [String: 'Hello World Ronik']

// String methods

// console.log(string2.__proto__) // {} -> means object

// Accessing characters of a string

// console.log(string2[5]) // " " (space)
// console.log(string2[6]) // W
// console.log(string2[7]) // o

// length property

// console.log(string1.length) // 11
// console.log(string2.length) // 17

// Converting string to lowercase and uppercase

// console.log(string2.toUpperCase()) // HELLO WORLD RONIK
// console.log(string2.toLowerCase()) // hello world ronik

// indexOf() method

// console.log(string2.indexOf(" ")) // 5
// console.log(string2.indexOf("Ronik")) // 12
// console.log(string2.indexOf("n")) // 14
// console.log(string2.lastIndexOf("n")) // 14

// charAt() method

// console.log(string2.charAt(6)) // W

// trim() method

// console.log(string3) //                     Hello World Ronik
// console.log(string3.trim()) // Hello World Ronik -> removes the white spaces from the start and end of the string
// console.log(string3.trimStart()) // Hello World Ronik         -> removes the white spaces from the start of the string;
// console.log(string3.trimEnd()) //                      Hello World Ronik -> removes the white spaces from the end of the string;

// Substring() & Slice() method

// let newString = string2.substring(5, 8) // Negative values are treated as 0
// console.log(newString) // ' Wo'

// let newString2 = string2.slice(-17, -1) // Negative values are treated are accepted here
// console.log(newString2) // 'Hello World Roni'

// split() method -> split(separator)/splits(separator, limit)

// splitedString = string2.split(" ") // splits the string into an array of substrings
// console.log(splitedString)// [ 'Hello', 'World', 'Ronik' ] -> returns an array

// join() method -> join()/join(separator)

// console.log(splitedString.join("/")) // Hello/World/Ronik -> joins the array elements into a string
// console.log(splitedString.join()) // Hello,World,Ronik -> without any separator it joins the array elements into a string using ','

// Replace() method -> replace(searchValue, newValue)

// const url = "https://ronik.com/ronik%20chatterjee"
// console.log(url);
// console.log(url.replace("%20", "-")) // https://ronik.com/ronik-chatterjee


// includes() method -> includes(searchValue)

// console.log(url.includes("ronik")) // true
// console.log(url.includes("Ronik")) // false

// startsWith() method -> startsWith(searchValue)

// console.log(url.startsWith("https")) // true
// console.log(url.startsWith("ronik")) // false

// endsWith() method -> endsWith(searchValue)

// console.log(url.endsWith("ee")) // true
// console.log(url.endsWith("ronik")) // false

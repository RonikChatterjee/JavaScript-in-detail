// arrays
// Arrays in JavaScript are resizable, ordered collections of elements.
// const myArray = [1, 2, 3, 4, 5]
// console.log(myArray)

const myHeroes = ["Shaktiman", "naagraj"]
// console.log(myHeroes)

const myArr2 = new Array(11, 92, 33, 4) // Creating array using constructor
// console.log(myArr2[0])
// console.log(myArr2);


// Array Methods

// 1. push() - Adds an element to the end of an array
// myArr2.push(5)
// console.log(myArr2)
// --------------------------------------------------------------------
// 2. pop() - Removes the last element from an array
// myArr2.pop()
// console.log(myArr2)
// --------------------------------------------------------------------
// 3. shift() - Removes the first element from an array
// myArr2.shift()
// console.log(myArr2)
// --------------------------------------------------------------------
// 4. unshift() - Adds an element to the beginning of an array
// myArr2.unshift(0)
// console.log(myArr2)
// --------------------------------------------------------------------
// 5. concat() - Joins two arrays
let finalArr = myArr2.concat(myHeroes)
// console.log(finalArr)
// --------------------------------------------------------------------
// 6. includes() - Checks if an array contains a certain element
// console.log(finalArr.includes("Shaktiman"))
// console.log(finalArr.includes("apple")) // If the element is not found it returns 'false'
// --------------------------------------------------------------------
// 7. indexOf() - Searches the array for an element and returns its position
// console.log(finalArr.indexOf("Shaktiman"))
// console.log(finalArr.indexOf("apple")); // If the element is not found it returns '-1'
// --------------------------------------------------------------------
// 8. reverse() - Reverses the order of the elements in an array
// console.log(finalArr.reverse())
// --------------------------------------------------------------------
// 9. join() - Joins all elements of an array into a string
// console.log(finalArr.join()) // By default it uses ',' as a separator
// console.log(finalArr.join("/")) // Here '/' is used as a separator
// console.log(typeof finalArr.join("/")) // It returns a string
// --------------------------------------------------------------------
// 10. slice() - Extracts a section of an array and returns a new array
// console.log("A ", myArr2)

// const mynewArray = myArr2.slice(1, 3) // It will return elements from index 1 to 3 (3 is not included)

// console.log("B ", mynewArray) // New array with elements [2, 3]

// console.log("C ", myArr2) // Original array remains unchanged
// --------------------------------------------------------------------
// 11. splice() - Adds/Removes elements from an array and changes the original array not the copy
// console.log("D ", myArr2)

// const mynewArray2 = myArr2.splice(1, 3) // It will remove elements from index 1 to 3 (3 is included) from myArr2 and will return the removed elements

// console.log("E ", mynewArray2) // Removed elements [2, 3, 4]

// console.log("F ", myArr2) // Original array is changed [1]
// --------------------------------------------------------------------
// 12. sort() - Sorts the elements of an array
// myArr2.sort()
// console.log("G ", myArr2.toSorted()) // It will sort the elements in ascending order
// --------------------------------------------------------------------










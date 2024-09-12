const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// .map is used to return a new array with all types of operations on the elements except filtering (condition checking) them
const newNums = myNumers.map( (num) => { return num + 5})

// chaining map and filter
// const newNums = myNumers
//                 .map((num) => num * 10 ) // for other operations
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40) // for condition checking

console.log(newNums);
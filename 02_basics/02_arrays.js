// Arrays Concatenation
const marvel_heroes =["thor", "ironman", "captain america"]
const dc_heroes = ["batman", "superman", "flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3][1]) // Output: superman

// marvel_heroes.concat(dc_heroes) // wrong way to concatenate arrays
// const all_heroes = marvel_heroes.concat(dc_heroes) // correct way to concatenate arrays
// Same can also be done using spread operator

const all_heroes = [...marvel_heroes, ...dc_heroes] // more than 2 values can be concatenated using spread operator

// console.log(marvel_heroes)
// console.log(all_heroes)
// --------------------------------------------------------------------
// flat method()
const another_array = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10], 11]
const real_another_array = another_array.flat(Infinity) // Infinity is used to flatten nested arrays to any depth -> Infinity is the maximum depth
// console.log(real_another_array)
// --------------------------------------------------------------------
// Cases during data scraping

console.log(Array.isArray("Ronik")) // Output: false
console.log(Array.from("Ronik")) // Output: ["R", "o", "n", "i", "k"]
console.log(Array.from({name: "ronik"})) // Output: []
// .from is used to convert array like objects to array -> for example: "Ronik" into ["R", "o", "n", "i", "k"]
// --------------------------------------------------------------------
// .of is used to create array from multiple values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // Output: [100, 200, 300];
// --------------------------------------------------------------------

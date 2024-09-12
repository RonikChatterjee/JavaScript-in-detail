// const tinderUser = new Object() // singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderuser)
// --------------------------------------------------------------------
// Nested Objects

// const regularUser = {
//     email: "some@gmail.com",
//     fullName: {
//         userFullName: {
//             firstName: "Ronik",
//             lastname: "Chatterjee"
//         }
//     }
// }

// Accessing the nested object

// console.log("Layer 1: ", regularUser.fullName)
// console.log("Layer 2: ", regularUser.fullName.userFullName)
// console.log("Layer 3: ", regularUser.fullName.userFullName.firstName)
// console.log("Layer 3: ", regularUser.fullName.userFullName.lastname)
// --------------------------------------------------------------------
// Concatinating Objects(more than 1 object)

const obj1 = {1: "One", 2: "Two"}
const obj2 = {3: "Three", 4: "Four"}
const obj3 = {5: "Five", 6: "Six"}

const obj4 = { obj1, obj2} // {obj1: { '1': 'One', '2': 'Two' }obj2: { '3': 'Three', '4': 'Four' }}

// Object.assign() method
const obj5 = Object.assign(obj1, obj2, obj3)
//obj1 -> {'1': 'One','2': 'Two','3': 'Three','4': 'Four','5': 'Five','6': 'Six'}
// obj5 -> {'1': 'One','2': 'Two','3': 'Three','4': 'Four','5': 'Five','6': 'Six'}

let obj6 = Object.assign({}, obj1, obj2, obj3) // Here '{}' is the target object(empty object) & obj1, obj2, obj3 are source objects. Here the original value of obj1 is not change.

// Using spread operator '...'
let obj7 = {...obj1, ...obj2, ...obj3}

// console.log(obj5)
// console.log(obj7)
// --------------------------------------------------------------------
// When data comes from database or server

const user = [
    {
        id: 1,
        name: "Sammy",
    },
    {
        id: 2,
        name: "Ronik",
    },
    {
        id: 3,
        name: "Chatterjee",
    }
]

// console.log(user)
// console.log(user[0])
// console.log(user[1])

// let keys = Object.keys(user)
// console.log(keys)
// console.log(Object.values(user))

// console.log(Object.keys(user[2]))
// console.log(Object.values(user[2]))

// console.log(Object.entries(user))
// console.log(tinderUser.hasOwnProperty("isLoggedIn"))
// --------------------------------------------------------------------
// Object Destructuring

const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Sammy"
}

// let {courseInstructor: instructor} = course // Here courseInstructor is renamed as instructor
// console.log(instructor) // instead of course.courseInstructor

let {coursename: name, price, courseInstructor: instructor} = course  
console.log(name, price, instructor) // JavaScript 999 Sammy

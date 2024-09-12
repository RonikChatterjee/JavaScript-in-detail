// Dates

let myDate = new Date();
// console.log(myDate);
console.log(typeof myDate);

// console.log(myDate.toString()); // Mon Jul 29 2024 09:54:41 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Mon Jul 29 2024
// console.log(myDate.toTimeString()); // 09:54:41 GMT+0530 (India Standard Time)

// console.log(myDate.toISOString()); // 2024-07-29T04:24:41.012Z

// console.log(myDate.toJSON()); // 2024-07-29T04:24:41.012Z

// console.log(myDate.toLocaleString()); // 29/7/2024, 9:54:41 AM
// console.log(myDate.toLocaleDateString()); // 29/7/2024
// console.log(myDate.toLocaleTimeString()); // 9:54:41 AM

// let myCreatedDate = new Date(2024, 0, 23) 
// console.log(myCreatedDate.toDateString()) // Tue Jan 23 2024

// let myCreatedDate = new Date(2024, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()) // 23/1/2024, 5:03:00 am

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString()) // 14/1/2023, 12:00:00 am

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleDateString()) // 14/1/2023

let myTimestamp = Date.now();
// console.log(myTimestamp); // 1627556241012 -> returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
// console.log(myCreatedDate.getTime()); // 1671052800000
// console.log(Math.floor(Date.now()/1000)); // 1627556241 -> returns the number of seconds elapsed since January 1, 1970 00:00:00 UTC


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getSeconds());
// console.log(newDate.getDay());

// syntax: newDate.toLocaleString('internationalization', {customizable options})
// console.log(newDate.toLocaleString(
//     'default', 
//     {
//         weekday: 'long',
//         year: "2-digit"
//     }
// )) // Monday, 24
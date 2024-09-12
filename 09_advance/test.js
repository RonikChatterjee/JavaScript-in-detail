// let num = 19;
// let str = String(num);
// let rev = str.split('').reverse().join('');
// console.log(rev);


// function myMap (x, y) {
//     let arr = [];
//     for (let i = 0; i < x.length; i++) {
//         arr.push(y(x[i]));
//     }
//     return arr;
// }

// Polyfill for forEach
function myForEach (x) {
    for (let i = 0; i < x.length; i++) {
        return x[i];
    }
}
// EXAMPLE 1 - Remove the Last Element from an Array

const arr = ['a', 'b', 'c', 'd'];

const removeLast = arr.pop();
console.log(removeLast); // 👉️ d

console.log(arr); // 👉️ ['a','b','c']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove the Last Element from an Array using Array.slice()

// const arr = ['a', 'b', 'c', 'd'];

// const withoutLast = arr.slice(0, -1);
// console.log(withoutLast); // 👉️ ['a','b','c']

// console.log(arr); // 👉️ ['a', 'b', 'c', 'd']

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove the last N Elements from an Array using Array.slice()

// const arr = ['a', 'b', 'c', 'd'];

// // ✅ Remove the last 2 elements from an array
// const removeLast2 = arr.slice(0, -2);
// console.log(removeLast2); // 👉️ [ 'a', 'b' ]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Remove the Last Element from an Array using Array.splice()

// const arr = ['a', 'b', 'c', 'd'];

// const last = arr.splice(-1);
// console.log(last); // 👉️ [ 'd' ]

// console.log(arr); // 👉️ [ 'a', 'b', 'c' ]

// ------------------------------------------------------------------

// // EXAMPLE 5 - Remove the last N Elements from an Array using Array.splice()

// const arr = ['a', 'b', 'c', 'd', 'e'];

// // ✅ Remove the last 2 elements from the array
// const removedElements = arr.splice(-2);
// console.log(removedElements); // 👉️ [ 'd', 'e' ]

// console.log(arr); // 👉️ [ 'a', 'b', 'c' ]

// ------------------------------------------------------------------

// // EXAMLPE 6 - Remove the last N Elements from an Array using `while` loop

// const arr = ['a', 'b', 'c', 'd'];

// // ✅ remove the last 2 elements from an array
// let n = 2;

// while (n > 0) {
//   n -= 1;
//   arr.pop();
// }

// console.log(arr); // 👉️ [ 'a', 'b' ]

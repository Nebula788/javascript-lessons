// 1 Sum Until Negative
// const numbers = [4, 7, 10, -3, 6, 9];

// let sum = 0;
// for (let x = 0; 0 < numbers.length; x++) {
//   if (numbers[x] < 0) {
//     break;
//   } else {
//     sum += numbers[x];
//   }
// }
// console.log("exercise1", sum);

// 2 Count True Value Indexes
// const bools = [true, false, true, true, false, false, true];

// let i = 0;
// let count = 0;
// while (i < bools.length) {
//   if (bools[i]) {
//     count = count + 1;
//   }
//   i++;
// }
// console.log(count);

// 3 Reverse Array (Manually)
// const arr = [1, 2, 3, 4, 5];
// const arrRevered = [];

// for (let x = 0; x < arr.length; x++) {
// //   console.log(arr.length - x - 1);
//   arrRevered.push(arr[arr.length - x - 1]);
// }
// console.log(arrRevered);

// 4 Students Above Threshold (>= 65)
// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 58 },
//   { name: "Charlie", score: 90 },
// ];
// const list = [];
// let i = 0;
// for (let i = 0; i < students.length; i++) {
//   if (students[i].score >= 65) {
//     list.push(students[i].name);
//   }
// }

// console.log(list);
// 5 Total Price Calculator
// const cart = [
//   { name: "Apple", price: 2, quantity: 3 },
//   { name: "Banana", price: 1, quantity: 5 },
// ];

// let totalPrice = 0;
// let i = 0;
// for (let i = 0; i < cart.length; i++) {
//   totalPrice = totalPrice + cart[i].price * cart[i].quantity;
// }
// console.log("Total Price", totalPrice);
// 6 Average Age Calculator
// let averageAge = 0;
// const people = [
//   { name: "Tom", age: 20 },
//   { name: "Jerry", age: 25 },
//   { name: "Spike", age: 30 },
// ];

// for (let i = 0; i < people.length; i++) {
//   averageAge += people[i].age;
// }
// console.log(averageAge / people.length);
// 7 Remove Duplicates
// const dupArr = [1, 2, 2, 3, 4, 4, 5];
// const arr0 = [];
// for (let a = 0; a < dupArr.length; a++) {
//   if (!arr0.includes(dupArr[a])) {
//     arr0.push(dupArr[a]);
//   }
// }
// console.log(arr0);

// 8 Longest Word
// const sentence = "JavaScript is awesome hjcvndfgfdgbij fbvi fj and powerful";
// const splitArr = sentence.split(" ");
// let maxWordIndex = 0;
// console.log(splitArr);
// for (let x = 0; x < splitArr.length; x++) {
//   if (splitArr[maxWordIndex].length < splitArr[x].length) {
//     maxWordIndex = x;
//   }
// }
// console.log(splitArr[maxWordIndex]);

// 9 Find Most Expensive Product
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Phone", price: 700 },
  { name: "Phone", price: 2999 },
];
let maxPrice = 0;
let cost = 0;
for (let i = 0; i < products.length; i++) {
  if (products[i].price > maxPrice) {
    maxPrice = products[i].price;
    cost = i;
  }
}
console.log(products[cost].price);

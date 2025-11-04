//1

// for (let i = 0; i <= 10; i++ ){
//     console.log(i)
// }

//2

// const fruits = ["apple", "orange", "banana", "mango", "cherry", "avakado"];
// for (let i = 0; i < fruits.length; i = i + 1){
//     console.log(fruits[i])
// }
// // for (let i = 0; i < 4; i = i + 1){
// //     console.log(fruits[i])
// // }

//3

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// for (let i = 0; i < cars.length; i = i + 1) {
//   if (i % 2 === 0) {
//     console.log(cars[i]);
//   }
// }

// //4

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

//5

// for (let i = 1; i <= 100; i = i + 2) {
//   console.log(i);
// }

// //6

// for (let i = 2; i <= 100; i = i + 2) {
//   console.log(i);
// }

//7

// let sum = 0;
// let i = 0;
// let hh = 0;
// while (i < 100) {
//   sum += i;
//   i++;
//   if (sum < 100) {
//     hh = sum;
//   }
// }
// console.log(hh);

// //8

//  let i = 0;
//  while (i <50){
//     i++;
//     if(i % 3 === 0){
//         console.log(i)
//     }
//  }

//9

// let numbers = [1, 3, 5, 7, 8, 9, 11, 10];
// let i = 0;
// while (i <= numbers.length) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//     break;
//   }
//   i++;
// }

//10

// const numbers = [4, 9, 2, 7, 5, 100, 32, 24, 25, 13, 54, 98, 88];

// let max = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(max);

//11

// const fruits = ["apple", "orange", "cherry"];

// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

//12

// const users = [
//   { id: 1, name: "Tsetsegee" },
//   { id: 2, name: "Dulmaa" },
//   { id: 3, name: "Bataa" },
// ];

// const orders = [
//   {
//     userId: 1,
//     items: [
//       { name: "MacBook", price: 2500000 },
//       { name: "Mouse", price: 40000 },
//     ],
//   },
//   { userId: 2, items: [{ name: "Pen", price: 2000 }] },
//   { userId: 3, items: [{ name: "Chair", price: 120000 }] },
// ];

// const filteredOrders = orders.filter((order)=> order.items.some((item)=>item.price >= 100000));
// const userId = filteredOrders.map((order)=>order.userId)
// console.log(userId)

// console.log(filteredOrders)

// ===================== 1. MAP — double all numbers =====================

const nums1 = [1, 2, 3, 4];
/* TODO: use .map to create [2, 4, 6, 8] */
console.log(nums1.map((num) => num * 2));

// ===================== 2. MAP — return only string lengths =====================

const words1 = ["apple", "hi", "notebook"];
/* TODO: use .map to get [5, 2, 8] */
console.log(words1.map((word) => word.length));

// ===================== 3. FOR EACH — just log each item =====================

const movies = ["Inception", "Avatar", "Dune"];
/* TODO: use .forEach to console.log each movie */
movies.forEach((movieName) => console.log(movieName));

// ===================== 4. FILTER — keep only even numbers =====================

const nums2 = [3, 8, 11, 2, 9, 4];
/* TODO: use .filter to get [8, 2, 4] */
const nums = nums2.filter((nums) => nums % 2 == 0);
// console.log(nums);

// ===================== 5. FILTER — words longer than 4 letters =====================

const words2 = ["cat", "giraffe", "sun", "planet"];
/* TODO: use .filter to get ["giraffe", "planet"] */
const longwords = words2.filter((words) => words.length >= 4);
console.log(longwords);

// ===================== 6. FIND — first number > 10 =====================

const nums3 = [4, 9, 15, 8, 22];
/* TODO: use .find to return 15 */
const found = nums3.find((number)=> number >10);
console.log(found)

// ===================== 7. FIND — first string that includes "dog" =====================

const phrases = ["hotdog", "cat lover", "dog park", "bird"];
/* TODO: use .find to return "hotdog" */
const foun = phrases.find((dog)=> dog.includes("dog"));
console.log(found)

// ===================== 8. MAP + TEMPLATE — turn names into greetings =====================

const names = ["Alice", "Bob", "Charlie"];
/* TODO: use .map to output ["Hello Alice", "Hello Bob", ...] */
console.log(names.map((name)=>"Hello " + name));

// ===================== 9. FILTER + MAP — adults' names only =====================

const people = [
  { name: "Mia", age: 17 },
  { name: "John", age: 21 },
  { name: "Sara", age: 25 },
];
/* TODO:
1) filter only people age 18+
2) then .map to return just their names
*/

let adults = people.filter((adult)=> adult.age > 18)
const adultNames= adults.map((adultA)=> adultA.name)
console.log(adultNames)

// ===================== 10. FOR EACH — total up numbers manually =====================

const prices = [5, 10, 3];
let total = 0;
/* TODO: use .forEach to sum into total, then console.log(total) */
prices.forEach((sum)=> total = total + sum);
console.log(total)

// ===================== 1. MAP — add fullName property to users =====================
const users1 = [
  { first: "John", last: "Doe" },
  { first: "Jane", last: "Smith" }
];

/* TODO: use map to return a new array where each object gains a fullName like "John Doe" */
const fullName = users1.map((users1)=> users1.first + " " + users1.last)
console.log(fullName)

// ===================== 2. FILTER — get products in stock & price > 20 =====================

const products = [
  { name: "Keyboard", price: 30, inStock: true },
  { name: "Mouse", price: 15, inStock: true },
  { name: "Laptop", price: 900, inStock: false }
];
/* TODO: use filter to return only products that are inStock and price > 20 */
let pro = products.filter((product)=>product.inStock ==true)
let pro2 = pro.filter((product1)=>product1.price > 20)
console.log(pro2)

// ===================== 3. FIND — get first student with grade A =====================

// const students = [
//   { name: "Mia", grade: "B" },
//   { name: "Leo", grade: "A" },
//   { name: "Zoe", grade: "A" }
// ];
// /* TODO: use find to get the first student with grade "A" */
// const found = students.find((element)=> element.grade == "A")
// console.log(found)

// ===================== 4. FOREACH — log product names with index =====================

// const productNames = ["Keyboard", "Mouse", "Laptop"];
// /* TODO: use forEach to console.log each item like: "1. Keyboard" */
// productNames.forEach((index, productName) => console.log(productName, index));

// ===================== 5. MAP — apply 10% discount to product prices =====================

// const prices = [100, 50, 200];
// /* TODO: use map to return a new array with each price 10% lower */
// console.log(prices.map((discounted) => discounted - (discounted / 100) * 10));

// ===================== 6. FILTER + MAP — active users' emails =====================

// const users2 = [
//   { name: "Anna", email: "anna@mail.com", active: true },
//   { name: "Tom", email: "tom@mail.com", active: false },
//   { name: "Sara", email: "sara@mail.com", active: true },
// ];
// /* TODO: filter active users then map to return an array of only their email addresses */
// let actives = users2.filter((user)=> user.active == true)
// console.log(actives.map((mail)=> mail.email))
// ===================== 7. FIND — first product over $500 =====================

// const expensiveProducts = [
//   { name: "Phone", price: 499 },
//   { name: "Gaming PC", price: 1500 },
//   { name: "Tablet", price: 299 },
// ];
// /* TODO: use find to return the first product with price > 500 */

// const found = expensiveProducts.find((product)=> product.price >= 500)
// console.log(found)

// ===================== 8. FOREACH — count total likes =====================
// const posts = [
//   { title: "Hello", likes: 10 },
//   { title: "World", likes: 5 },
//   { title: "JavaScript", likes: 20 },
// ];
// let totalLikes = 0;
// /* TODO: use forEach to add all likes into totalLikes */

// // ===================== 9. MAP — convert temperatures from C to F =====================
// const tempsC = [0, 20, 30];
// /* TODO: return a new array where each number is converted to Fahrenheit (C * 9/5 + 32) */

// // ===================== 10. FILTER — only usernames with length >= 5 =====================
// const usernames = ["alex", "jonathan", "mia", "stephanie"];
// /* TODO: filter to return only usernames with 5 or more characters */

//

// let i = 0;
// while (i < 10) {
//   // break;
//   console.log(i);
//   i++;
// }

// ===========================================
// 1. Print even numbers from 2 to 20 using a while loop
// ===========================================

// ===========================================
// 2. Print the multiplication table of 5 using a for loop
// ===========================================

// ===========================================
// 3. Sum numbers from 1 to 100 using a while loop
// ===========================================

// ===========================================
// 4. Print all elements of an array using a for loop
// Example array: const fruits = ["apple", "banana", "cherry", "date"];
// ===========================================

// ===========================================
// 5. Find the largest number in an array using a for loop
// Example array: const numbers = [12, 45, 67, 23, 89, 34];
// ===========================================

// ===========================================
// 6. Reverse an array using a while loop
// Example array: const arr = [1, 2, 3, 4, 5];
// ===========================================

// ===========================================
// 7. Count down from 10 to 1 using a for loop
// ===========================================

// ===========================================
// 8. Print only odd numbers between 1 and 20 using a while loop
// ===========================================

// ===========================================
// 9. Calculate the factorial of a number using a for loop
// Example: let num = 5;
// ===========================================

// ===========================================
// 10. Print each character of a string using a for loop
// Example: let word = "JavaScript";
// ===========================================

// ===========================================
// 11. Keep asking for user input until they type "stop" (while loop)

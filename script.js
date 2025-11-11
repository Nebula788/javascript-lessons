//1
// Хэрэглэгчээс тоо авна
// Хэрвээ тоо тэгш бол -> "Even"
// Хэрвээ сондгой бол -> "Odd" гэж хэвлэнэ
// let number = window.prompt("Toogoo oruulna uu");

// if (number % 2 === 0) {
//   console.log("Even");
// } else if (number % 2 !== 0) {
//   console.log("Odd");
// }
// 2
// Нэг тоо өгөгдсөн байна
// Хэрвээ тоо > 0 бол -> "Positive"
// Хэрвээ тоо < 0 бол -> "Negative"
// Хэрвээ 0 бол -> "Zero" гэж хэвлэнэ
// let number1 = window.prompt("Daalgavar 2");

// if (number1 > 0) {
//   console.log("Positive");
// } else if (number1 < 0 ) {
//   console.log("Negative");
// } else if (number1 = 0) {
//     console.log("Zero");
// }

//3
// Хэрэглэгчээс нас асууна
// Хэрвээ 13-аас доош -> "Child"
// 13–19 хооронд -> "Teenager"
// Үүнээс дээш -> "Adult" гэж хэвлэнэ
// let age = window.prompt("Ta nasaa oruulna uu");

// if (age < 13) {
//     console.log("Child");
// } else if (age > 13 && age < 19) {
//     console.log("Teenager");
// } else if (age > 19) {
//     console.log("Adult");
// }

//4
// let password = "танынууцүг"
// Хэрвээ урт нь < 6 бол -> "Weak"
// 6–10 хооронд бол -> "Moderate"
// 10-аас урт бол -> "Strong"
// let password = window.prompt("Таны нууц үг");

// if (password.length <= 6) {
//   console.log("Weak");
// } else if (password.length <= 10) {
//   console.log("Moderate");
// } else if (password.length > 10) {
//     console.log("Strong");
// }

//5
// Хэрэглэгчээс тоо авна
// Хэрвээ 3-д хуваагддаг бол -> "Fizz"
// Хэрвээ 5-д хуваагддаг бол -> "Buzz"
// Хэрвээ 3 болон 5-д хоёуланд нь хуваагддаг бол -> "FizzBuzz"
// Хэрвээ аль нь ч биш бол -> "3 эсвэл 5-д хуваагдахStrong
//
// let number3 = window.prompt("Duriin too oruulna uu");

// if (number3 % 3 === 0 && number3 % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (number3 % 3 === 0) {
//   console.log("Fizz");
// } else if (number3 % 5 === 0) {
//   console.log("Buzz");
// } else {
//   console.log("Strong");
// }
//
//
//
//
// ========== Дасгал 1 ==========
// 3 болон 5-д хоёуланд нь хуваагддаг бүх тоог ол, дараа нь тэдгээрийг 2 дахин нэмэгдүүл.
// Хариу: [30, 60]
// const nums1 = [3, 5, 10, 15, 18, 20, 30, 33];
// const filtered = nums1
//   .filter((number) => number % 3 == 0 && number % 5 == 0)
//   .map((num) => num * 2);
// console.log(filtered);
// ========== Дасгал 2 ==========
// Доорх жагсаалтаас нэрэндээ “dev” гэсэн үгтэй (том, жижиг үсэг ялгахгүйгээр) хэрэглэгчдийг ол.
// const usernames = ["AlphaDev", "beta", "DEVKing", "coder", "proDev99"];
// // Хариу: ["AlphaDev", "DEVKing", "proDev99"]
// console.log(usernames.filter(username => username.toLowerCase().includes("dev")));

// // ========== Дасгал 3 ==========
// // Үгсийн массиваас эхний болон сүүлийн үсэг нь ижил (том, жижиг үсэг хамаагүй) үгсийн уртыг буцаа.
// const words1 = ["level", "Anna", "world", "radar", "Robot"];
// // Хариу: [5, 4, 5]
// console.log(
//   words1
//     .filter(
//       (i) => i.toLowerCase().split("").reverse().join("") === i.toLowerCase()
//     )
//     .map((word) => word.length)
// );

// // ========== Дасгал 4 ==========
// Доорх бараанууд дундаас 50 доллараас хямд бөгөөд нэрэндээ “s” үсэгтэй бараануудын нэрийг буцаа.
// const products = [
//   { name: "Socks", price: 15 },
//   { name: "Shoes", price: 75 },
//   { name: "Shirt", price: 45 },
//   { name: "Hat", price: 30 },
// ];
// // Хариу: ["Socks", "Shirt"]

// const filteredProducts = products.filter(
//   (product) => product.price < 50 && product.name.toLowerCase().includes("s")
// );
// console.log(filteredProducts);

// ========== Дасгал 5 ==========
// Нас нь 25-аас доош бөгөөд “Python” чадвартай анхны сурагчийг ол.
// const students1 = [
//   { name: "Luna", age: 22, skills: ["Python", "C++"] },
//   { name: "Max", age: 26, skills: ["JavaScript", "HTML"] },
//   { name: "Tara", age: 21, skills: ["Python", "React"] },
// ];
// // Хариу: { name: "Luna", ... }
// console.log(
//   students1
//     .filter((student) => student.age < 25)
//     .find((student) => student.skills.includes("Python"))
// );

//
// )
// ========== Дасгал 7 ==========
// “js” гэсэн үгтэй tag агуулсан нийтлэлүүдийн гарчгийг буцаа.
// const posts = [
//   { title: "Intro to Python", tags: ["python", "beginner"] },
//   { title: "JS Advanced", tags: ["js", "web", "frontend"] },
//   { title: "React Hooks", tags: ["react", "js", "frontend"] },
// ];
// // Хариу: ["JS Advanced", "React Hooks"]
// const filteredPosts = posts.filter((post) =>
//   post.tags.some((tag) => tag === "js")
// );
// console.log(filteredPosts);
// ========== Дасгал 8 ==========
// “premium” tag бүхий бүх барааны нийт үнийг forEach ашиглан тооцоол.
// const items = [
//   { name: "Basic Plan", price: 20, tags: ["basic"] },
//   { name: "Pro Plan", price: 50, tags: ["premium"] },
//   { name: "Enterprise", price: 120, tags: ["premium", "business"] },
// ];

// let sum = 0;
// const filteredItems = items.filter((item) =>
//   item.tags.some((tag) => tag === "premium")
// );

// console.log(filteredItems);
// filteredItems.forEach((item) => (sum += item.price));

// console.log(sum, "suym");
// // Хариу: 170
// ========== Дасгал 9 ==========
// Имэйл давхардсан хэрэглэгчдийг (том жижиг үсэг ялгахгүйгээр) хас.
// const users = [
//   { name: "Alex", email: "alex@mail.com" },
//   { name: "ALICE", email: "alice@mail.com" },
//   { name: "alex2", email: "Alex@mail.com" },
//   { name: "Tom", email: "tom@mail.com" },
// ];
// // Хариу: “alex2” устгагдана (alex-той ижил имэйлтэй)
// const mails = [];
// users.forEach((user) => {
//   if (!mails.includes(user.email.toLowerCase())) {
//     mails.push(user.email);
//   }
// });
// console.log(mails);
// console.log(users.filter((user) => mails.includes(user.email)));

// users.map((gmail)=>gmail.email.toLowerCase())

// ==========================
// Exercise 1 — map
// ==========================
// Given the array of numbers, return a new array where each number is doubled.
// const numbers1 = [2, 5, 8, 10];
// console.log(numbers1.map((number) => number * 2));
// ==========================
// Exercise 2 — filter
// ==========================
// From the array below, return only the even numbers.
// const numbers2 = [3, 6, 9, 12, 15, 18];
// console.log(numbers2.filter((number) => number % 2 === 0));
// ==========================
// Exercise 3 — find
// ==========================
// Find the first object where age is greater than 25.
// const people1 = [
//   { name: "Alice", age: 21 },
//   { name: "Bob", age: 26 },
//   { name: "Charlie", age: 29 },
//   { name: "Diana", age: 19 },
// ];
// const foundPeople = people1.find((people) => people.age > 25);
// console.log(foundPeople);
// ==========================
// Exercise 4 — some
// ==========================
// Check if there is at least one number greater than 100.
// const numbers3 = [10, 20, 45, 80, 99];
// const over100 = numbers3.some(number => number >= 100);
// console.log(over100)
// ==========================
// Exercise 5 — includes
// ==========================
// Check if the word "banana" exists in the array.
// const fruits = ['apple', 'banana', 'grape', 'orange'];
// console.log(fruits.includes("banana"));
// ==========================
// Exercise 6 — map + filter
// ==========================
// First, filter numbers greater than 10, then map to their squares.
// const numbers4 = [3, 7, 12, 15, 20, 2];
// console.log(
//   numbers4.filter((number) => number > 10).map((number) => number * number)
// );
// ==========================
// Exercise 7 — find + includes
// ==========================
// Find the first student whose name includes the letter "a".
// const students = ["John", "Mia", "Alex", "Eli", "Tom"];
// const foundStudent = students.find((student) => student.includes("a"));
// console.log(foundStudent);
// ==========================
// Exercise 8 — filter + some
// ==========================
// From the array, return only users who have at least one skill equal to "Python".
// const users = [
//   { name: "Anna", skills: ["HTML", "CSS", "JS"] },
//   { name: "Ben", skills: ["Python", "C++"] },
//   { name: "Cara", skills: ["Go", "Rust"] },
//   { name: "Dan", skills: ["Python", "JS"] },
// ];
// const filteredUsers = users.filter((user) =>
//   user.skills.some((skill) => skill === "Python")
// );
// console.log(filteredUsers);
// ==========================
// Exercise 9 — map + includes
// ==========================
// Create an array of booleans indicating whether each fruit name includes the letter "e".
// const fruits2 = ["apple", "pear", "kiwi", "plum"];
// const speFruits = fruits2.map((fruit) => fruit.includes("e"));
// console.log(speFruits);
// console.log(fruits2.map((fruit) => fruit.includes("e")))
// ==========================
// Exercise 10 — filter + find
// ==========================
// Filter people who are older than 20, then find the first one whose name starts with "C".
// const people2 = [
//   { name: "Alice", age: 18 },
//   { name: "Bob", age: 23 },
//   { name: "Charlie", age: 30 },
//   { name: "Clara", age: 25 },
// ];
// console.log(
//   people2
//     .filter((people) => people.age > 20)
//     .find((people) => people.name.toLowerCase().includes("c"))
// );
// ==========================
// Exercise 11 — nested map + some
// ==========================
// Check if any order contains at least one item with a price greater than 100.
// const orders = [
//   {
//     id: 1,
//     items: [
//       { name: "Book", price: 20 },
//       { name: "Pen", price: 5 },
//     ],
//   },
//   {
//     id: 2,
//     items: [
//       { name: "Laptop", price: 1200 },
//       { name: "Mouse", price: 40 },
//     ],
//   },
//   { id: 3, items: [{ name: "Chair", price: 80 }] },
// ];
// const filteredOrders = orders.filter((order) =>
//   order.items.some((item) => item.price > 100)
// );
// const filteredItems = filteredOrders.map(
//   (order) => order.items.filter((item) => item.price > 100).map((item)=>item.name)
// );
// console.log(filteredItems)
// ==========================
// Exercise 12 — filter + map + includes (challenging)
// ==========================
// From the array, return names of users who have "admin" in their roles.
// const accounts = [
//   { name: "Eve", roles: ["user", "editor"] },
//   { name: "Mark", roles: ["admin", "moderator"] },
//   { name: "Sara", roles: ["guest"] },
//   { name: "Paul", roles: ["user", "admin"] },
// ];
// console.log(
//   accounts
//     .filter((account) => account.roles.includes("admin"))
//     .map((account) => account.name)
// );

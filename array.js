//1
const color = ["red", "green", "blue", "yellow", "black"];
console.log(color[2]);
console.log(color.indexOf("yellow"));
//2
const animals = ["Lion", "Tiger", "Elephant", "Giraffe", "crow"];
animals.splice(animals.indexOf("Elephant"), 1);
console.log(animals);

//3
const books = ["1984", "Brave New World", "Fahrenheint 451"];
books.push("Time Management", "Ikigai");
console.log(books);
//4
const numbers = [10, 20, 30, 40, 50];
console.log(numbers.indexOf(30));
//5
const fruits = ["apple", "banana", "cherry", "grape"];
fruits.splice(0, 1, "a", "b", "c", "d");
console.log(fruits);
//6
const fruits1 = ["apple", "banana", "grape"];
const fruits2 = ["cherry", "blueberry", "kivi"];
const allfruits = fruits1.concat(fruits2);
console.log(allfruits);
//7
const colors = ["red", "green", "blue", "yellow", "purple"];
console.log(colors.includes("blue"));
//8
const array1 = ["a", "b", "c"];
const array2 = ["a", "b", "c"];
if (array1.length === array2) {
  console.log("true");
} else if (array1.length !== array2) {
  console.log("false");
}
//9
const words = ["JavaScript", "is", "a", "versetile", "language"];
console.log(words.join(" "));

//10
const bars = ["gr", "br", "tr"];
bars.forEach(function (bar) {
  console.log(bar);
});

//1

// function findMax(numbers) {
//   let max = 0;
//   for (let x = 0; x < numbers.length; x++) {
//     if (max < numbers[x]) {
//       max = numbers[x];
//     }
//   }
//   return max;
// }

//2

// const findMax = (numbers) => {
//   let max = 0;
//   for (let x = 0; x < numbers.length; x++) {
//     if (max < numbers[x]) {
//       max = numbers[x];
//     }
//   }
//   return max;
// };

// console.log(findMax([1, 2, 8, 19, 27, 34]));

// console.log(findMax([1, 2, 3, 19, 27, 99, 4]));

//3

// const person = {
//   firstName: "Eternal",
//   lastName: "Crystal",
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log(person.getFullName());

//4
// const movie = {
//   title: "Nebula",
//   director: "Nebula",
//   year: "Nebula",
//   genre: "Nebula",
//   getKeysAndValues: function () {
//     return Object.entries(this)
//   },
// };
// console.log(movie.getKeysAndValues());

//5

// const info = {
//   student: {
//     name: "Reo",
//     age: "30",
//     address: {
//       city: "Tokyo",
//       street: "Nava",
//       zipCode: "56000",
//     },
//     getFullAddress: function () {
//       return (
//         this.address.city +
//         " " +
//         this.address.street +
//         " " +
//         this.address.zipCode
//       );
//     },
//   },
// };
// console.log(info.student.getFullAddress());

//6

// const user = {
//   name: "Gantulga",
//   age: "20",
//   greet: function () {
//     return "Hi " + this.name;
//     // console.log("Hi " + this.name);
//   },
//   uptadeName: function (newName) {
//     this.name = newName;
//   },
// };
// user.uptadeName("Nebula");

// console.log(user.name);
// // user.greet();

//7

// const book1 = {
//   title: "Arig",
//   author: "Reo",
//   year: "2020",
// };
// const book2 = {
//   author: "Reo",
//   description: "blabla",
//   category: "tratra",
//   year: "2020",
// };
// function mergeBooks() {
//   return Object.assign(book1, book2);
// }
// console.log(mergeBooks(book1, book2));

//9

// const user = {
//   name: "Gantulga",
//   age: "20",
//   gender: "male",
// };
// console.log(Object.entries(user));

//10

const class1Students = {
  1: { name: "Bolor", grade: 95 },
  2: { name: "Anu", grade: 87 },
  3: { name: "Temuujin", grade: 78 },
  4: { name: "Delger", grade: 83 },
  5: { name: "Zolzaya", grade: 92 },
};

const calculateAverage = (students) => {
  const studentsArr = Object.values(students);
  let totalGrade = 0;
  for (let x = 0; x < studentsArr.length; x++) {
    totalGrade = totalGrade + studentsArr[x].grade;
  }
  return totalGrade / studentsArr.length;
};
console.log(calculateAverage(class1Students));

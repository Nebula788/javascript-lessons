// //1
// const car = {
//   brand: "Toyota",
//   model: "Harrier",
//   year: 2024,
// };
// console.log(car);

// //2
// const person = {
//   firstName: "Gantulga",
//   lastName: "Odonbymbaa",
//   age: "20",
// };
// delete person.age;
// person.city = "Monoglian";
// person.position = "..";
// person.isMarried = false;
// console.log(person);

// //5
// const address = {
//   street: "Hudag",
//   city: "UB",
//   zipCode: "14000",
// };
// const student = {
//   name: "Gantulga",
//   age: "20",
//   address: address,
// };
// console.log(student.address.zipCode);

//8
const config = {
  host: "host",
  port: "port",
  protocol: "protocol",
};
Object.freeze(config);
config.host = "frozen";
console.log(config);
//
const config = {
  host: "host",
  port: "port",
  protocol: "protocol",
};
Object.seal(config);
config.host = "host";
delete config.port;
console.log(config);

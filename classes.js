//1

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}
// const rect = new Rectangle(5, 3);
// console.log(rect.area());
// console.log(rect.perimeter());

const height = document.getElementById("height");
const width = document.getElementById("width");
const infoDiv = document.getElementById("hariu");
const Area = () => {
  const rect = new Rectangle(height.value, width.value);
  const area = document.createElement("div");
  area.innerHTML = "<p>" + "Area: " + rect.area() + "</p>";
  infoDiv.appendChild(area);
};
const Perimeter = () => {
  const h = parseFloat(height.value);
  const w = parseFloat(width.value);
  const rect = new Rectangle(h, w);
  const perimeter = document.createElement("div");
  perimeter.innerHTML = "<p>" + "Perimeter: " + rect.perimeter() + "</p>";
  infoDiv.appendChild(perimeter);
};

// 2️⃣ Student (Оюутан)

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return "Hi, I'm " + this.name + " and I'm " + this.age + "years old.";
  }
}
const student = new Student("Sara", 20);
console.log(student.introduce());

// 3️⃣ BankAccount (Банкны данс)

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  withdraw(amount) {
    if (this.balance < amount) {
      console.log("Not enough balance!");
    } else {
      this.balance -= amount;
    }
  }
  deposit(amount) {
    this.balance += amount;
  }
  getBalance() {
    return this.balance;
  }
}
const account = new BankAccount("Enkhee", 100);
account.deposit(74);
account.withdraw(50);
console.log(account.getBalance());

// 4️⃣ TodoList (Даалгаврын жагсаалт)

class TodoList {
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
  showTasks() {
    return this.tasks;
  }
}
const todo = new TodoList();
todo.addTask("Learn JavaScript");
todo.addTask("Do homework");
todo.removeTask("Do homework");
console.log(todo.showTasks());

// 5️⃣ Calculator (Тооны машин)

class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) {
      return `Cannot divide by zero`;
    } else {
      return a / b;
    }
  }
}
const calc = new Calculator();
console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(2, 6));
console.log(calc.divide(10, 2));
console.log(calc.divide(10, 0));

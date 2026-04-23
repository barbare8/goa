class Car {
  constructor(brand, model, year, speed = 0) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = speed;
  }

  drive() {
    return "The car is moving";
  }

  increaseSpeed(amount) {
    this.speed += amount;
  }
}


class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  introduce() {
    return `Hi, my name is ${this.name}`;
  }

  isPassed() {
    return this.grade >= 51;
  }
}



class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}


class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.balance;
  }
}


class Phone {
  constructor(brand, model, battery = 100) {
    this.brand = brand;
    this.model = model;
    this.battery = battery;
  }

  charge() {
    this.battery = 100;
  }

  use(amount) {
    this.battery -= amount;

    if (this.battery <= 0) {
      this.battery = 0;
      return "Phone is dead";
    }
  }
}



class Animal {
  constructor(name, type, sound) {
    this.name = name;
    this.type = type;
    this.sound = sound;
  }

  makeSound() {
    return this.sound;
  }
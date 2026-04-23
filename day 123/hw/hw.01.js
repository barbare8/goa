class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
  }

  read() {
    this.isRead = true;
  }

  getSummary() {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
  }
}


class Laptop {
  constructor(brand, ram, storage) {
    this.brand = brand;
    this.ram = ram;
    this.storage = storage;
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  upgradeRam(amount) {
    this.ram += amount;
  }
}


class Player {
  constructor(username, health = 100, level = 1) {
    this.username = username;
    this.health = health;
    this.level = level;
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health < 0) this.health = 0;
  }

  heal(amount) {
    this.health += amount;
    if (this.health > 100) this.health = 100;
  }

  levelUp() {
    this.level += 1;
  }
}


class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemName) {
    this.items = this.items.filter(item => item.name !== itemName);
  }

  getTotalItems() {
    return this.items.length;
  }
}

class Timer {
  constructor(time = 0) {
    this.time = time;
    this.interval = null;
  }

  start() {
    if (this.interval) return;

    this.interval = setInterval(() => {
      if (this.time <= 0) {
        console.log("Time's up!");
        this.stop();
        return;
      }

      console.log(this.time);
      this.time--;
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  reset() {
    this.stop();
    this.time = 0;
  }
}




const book = new Book("1984", "George Orwell", 328);
console.log(book.getSummary());
book.read();


const laptop = new Laptop("HP", 8, 512);
laptop.turnOn();
laptop.upgradeRam(8);


const player = new Player("Hero");
player.takeDamage(20);
player.heal(10);
player.levelUp();

// ShoppingCart
const cart = new ShoppingCart();
cart.addItem({ name: "Phone", price: 800 });
cart.addItem({ name: "Charger", price: 20 });
console.log(cart.getTotalItems());
cart.removeItem("Charger");

// Timer
const timer = new Timer(5);
timer.start();
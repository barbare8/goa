
function Car(model, color, year) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.status = "working"; // default


  this.getInfo = function () {
    return `Model: ${this.model}, Color: ${this.color}, Year: ${this.year}, Status: ${this.status}`;
  };
}


const car1 = new Car("BMW", "Black", 2018);
const car2 = new Car("Mercedes", "White", 2020);
const car3 = new Car("Toyota", "Silver", 2015);
const car4 = new Car("Audi", "Blue", 2019);
const car5 = new Car("Honda", "Red", 2017);


console.log(car1.getInfo());
console.log(car2.getInfo());
// შექმენით კონსტრუქტორი (brand, year). და შექმენითობიექტი car ("bmw", 2005). switch case-ის გამოყენებით year-ის მიხედვით დააბრუნეთ ტექსტი: "Old", "Modern", "New".
function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}

let car = new Car("bmw", 2005);

let carAge;
switch (true) {
  case car.year < 2000:
    carAge = "Old";
    break;
  case car.year >= 2000 && car.year < 2015:
    carAge = "Modern";
    break;
  default:
    carAge = "New";
}

console.log(carAge);
function Car(brand, model, color) {
  this.brand = brand;
  this.model = model;
  this.color = color;
}


const car1 = new Car("Toyota", "Corolla", "White");
const car2 = new Car("BMW", "X5", "Black");

console.log(car1);
console.log(car2);




"----------------------------------------------------------------"
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}


const student1 = new Student("Giorgi", 20, "A");
const student2 = new Student("Nino", 19, "B");
const student3 = new Student("Luka", 21, "A");


console.log(student1);
console.log(student2);
console.log(student3);

"------------------------------------------------------------"
function Phone(brand, price, storage) {
  this.brand = brand;
  this.price = price;
  this.storage = storage;
}


const phone1 = new Phone("Apple", 1200, "128GB");
const phone2 = new Phone("Samsung", 900, "256GB");


console.log(phone1);
console.log(phone2);




"------------------------------------------------------------------"
function Animal(type, name, age) {
  this.type = type;
  this.name = name;
  this.age = age;
}


const animal1 = new Animal("Dog", "Buddy", 3);
const animal2 = new Animal("Cat", "Mimi", 2);


console.log(animal1);
console.log(animal2);

"---------------------------------------------------------------"
function User(username, email, isActive) {
  this.username = username;
  this.email = email;
  this.isActive = isActive;
}


const user1 = new User("gio123", "gio@mail.com", true);
const user2 = new User("nino456", "nino@mail.com", false);


console.log(user1);
console.log(user2);



"------------------------------------------------------------------"
try {
  const name = barbare;
  name = tornike;
  console.log(name)
}catch (e) {
    console.log(e.message)
}
"---------------------------------------------------------"
try {
  let name = "Luka";
  name()
} catch (e) {
  console.log("ეს ფუნქცია არ არის");
}

"--------------------------------------------------------------------"
try{
    let data = "{name:luka}"
   JSON.parse(data)
}  catch {
    console.log("არასწორი Json")
}
"-----------------------------------------------------------------"
try{
    let arr = [1,2,3]
    arr.toUpperCase()
}catch{
    console.log("არასწორი მეთოდი")
}

"-------------------------------------------------------------"
function divide(a, b) {
  if (b === 0) {
    throw new Error("0-ზე გაყოფა არ შეიძლება");
  }
  return a / b;
}


try {
  const result = divide(10, 0);
  console.log(result);
} catch (e) {
  console.log(e.message);
}
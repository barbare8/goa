// დაწერეთ კონსტრუქტორი ფუნქცია User(name, age). შექმენით რამდენიმე ობიექტი შეინახე სიაში და filter-ით დააბრუნეთ მხოლოდ სრულწლოვნები.
function User(name, age) {
  this.name = name;
  this.age = age;
}

let users = [
  new User("giorgi", 25),
  new User("nika", 17),
  new User("saba", 30),
  new User("luka", 16)
];

let adults = users.filter(user => user.age >= 18);
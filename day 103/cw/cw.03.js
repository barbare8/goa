// while loop-ის გამოყენებით შექმენით სია 1-დან 20-მდე რიცხვებით. შემდეგ reduce-ით იპოვეთ მათი ნამრავლი.
let numbers = [];
let i = 1;
while (i <= 20) {
  numbers.push(i);
  i++;
}
let product = numbers.reduce((acc, num) => acc * num, 1);
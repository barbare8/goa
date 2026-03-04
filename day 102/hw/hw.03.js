// 3)შექმენით სია რიცხვებით სავსე, და შემდეგ ამ სიის  საშუალო არითმეტიკული გამოითვალეთ 

// ჯამი გაყოფილი სიგრძეზე
let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce(function(acc, num) {
  return acc + num;
});
let average = sum / numbers.length;
console.log(average);
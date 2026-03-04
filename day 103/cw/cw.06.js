// შექმენით სია რიცხვებით. map-ით თითოეულ ელემენტს დაუმატეთ მისი ინდექსი. გამოიყენეთ ternary იმის შესამოწმებლად, არის თუ არა შედეგი 10-ზე მეტი.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersWithIndex = numbers.map((num, index) => {
  let sum = num + index;
  return sum > 10 ? sum : sum;
});
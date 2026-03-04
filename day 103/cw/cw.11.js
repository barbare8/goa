// while loop-ის გამოყენებით დაითვალეთ რამდენი რიცხვია სიაში 10-ზე მეტი. გამოიყენეთ if else.
let numbers = [5, 12, 8, 20, 3, 15];
let count = 0;
let i = 0;
while (i < numbers.length) {
  if (numbers[i] > 10) {
    count++;
  }
  i++;
}
console.log(count);
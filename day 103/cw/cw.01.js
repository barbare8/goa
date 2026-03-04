// შექმენით რიცხვების სია. , filter-ით გაფილტრეთ ისინი კენტი რიცხვებისგან და reduce-ით დაითვალეთ მათი ჯამი.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = numbers.filter(num => num % 2 !== 0);
let sumOfOddNumbers = oddNumbers.reduce((acc, num) => acc + num);
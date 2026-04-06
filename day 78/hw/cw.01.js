let number = Number(prompt("Enter a number:"));

console.log("Absolute value:", Math.abs(number));
console.log("Rounded value:", Math.round(number));




"---------------------------------------------------"\
let numbers = [3, 7, 1, 9, 4];

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Max:", max);
console.log("Min:", min);



"-------------------------------------"
let number1 = Number(prompt("Enter a number:"));

let square = number * number;
let sqrt = Math.sqrt(number);

console.log("Square:", square);
console.log("Square root:", squareRoot);



"-----------------------------------------"
let number2 = Number(prompt("Enter a decimal number:"));

let result = Math.floor(number);

console.log("Result:", result);





"-------------------------------------"
let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Random number:", randomNumber);



"----------------------------------------------------------------"

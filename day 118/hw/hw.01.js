const arr = [1, 2, 3, 4, 5];

const [first, ...rest] = arr;

console.log(first);
console.log(rest);
const arr1 = [1, 2, 3, 4, 5];

const [ , second, third, ...rest1] = arr;

console.log(second);
console.log(third);
console.log(rest);



"------------------------------------------------"
const obj = {
  name: "Giorgi",
  age: 25,
  city: "Tbilisi",
  country: "Georgia"
};

const { name, age, ...restObj } = obj;

console.log(name);
console.log(age);
console.log(restObj);



"-------------------------------------------------"


function countNumbers(...nums) {
  return nums.length;
}

console.log(countNumbers(1, 2, 3));      
console.log(countNumbers(5, 10));        
console.log(countNumbers());            




"----------------------------------------------"



function sumNumbers(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log(sumNumbers(1, 2, 3));      
console.log(sumNumbers(5, 10, 15));    
console.log(sumNumbers());            
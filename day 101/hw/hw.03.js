let numbers = [10, 20, 30, 40, 50, 60];
let result = numbers.filter(function (item, index) {
  return index % 2 === 0;
});
console.log(result);
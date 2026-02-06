const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = nums.map((num, index) =>
  `რიცხვი ${num}, ინდექსი ${index}, ჯამი ${num + index}`
)

console.log(result)
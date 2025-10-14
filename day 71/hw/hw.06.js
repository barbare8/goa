function invert(array) {
   let numbers = []
   let i = 0
   while(i<array.length){
     numbers.push(-array[i])
     i++
   }
  return numbers
}
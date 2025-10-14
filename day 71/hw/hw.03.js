function oddOrEven(array) {
   let odd_or_even = 0
   let codewars = 0
   while(codewars<array.length){
    odd_or_even += array[codewars]
     codewars++
   }
  if(odd_or_even%2==0){
    return "even"
  }
  else{
    return "odd" 
  }
}
function findAverage(array) {
  let calculate = 0
  let arr = 0
  while(arr <array.length){
    calculate+=array[arr]
    arr++
  }
  if(array.length==0){
    return 0
  }
  return calculate/array.length
}
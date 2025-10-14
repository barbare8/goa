
function arrayPlusArray(arr1, arr2) {
  let integer = 0
  let number= 0
  while(integer<arr1.length){
    number += arr1[integer]
    integer++
  }
  integer = 0
  while(integer<arr2.length){
    number += arr2[integer]
    integer++
  }
  return number
}
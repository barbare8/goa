function countSheeps(sheep) {
    let count = 0
     let why = 0
     while (why <= sheep.length){
       if (sheep[why] === true){
         count++
       }
       why++
     }
  return count
}
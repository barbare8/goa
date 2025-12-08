let day = document.getElementById('day')
let hr = document.getElementById('hr')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
// let newYear = new Date(
    
// )
const monthMaxDays = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31, 
]; 

  setInterval(function(){
    let date = new Date()
    console.log((months[date.getMonth()]))

    for(let i months.toSpliced(12-date.getMonth())){
      count += i
    }
      
    sec.textContent = 60 - date.getSeconds()
    min.textContent = 60 - date.getMinutes()
    hr.textContent =   2 -  date.getHours()
    day.textContent = month[date.getMonth()]- date.getDate()
    if (date.getFullYear === 2026){
      alert('HAPPY NEW YEAR!')
    }
    
}, 1000)
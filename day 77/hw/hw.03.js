let res = document.getElementById("RESULT") 
let button = document.getElementById("click")
let emogi = "😂🥉🔥💄"
button.onclick = function(){
    res.textContent = emogi[Math.floor(Math.random() *4)]
}
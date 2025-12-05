let child2 = document.getElementById("child2")
let child3 = document.getElementById("child3")
let Player1scores= document.getElementById("h1")
let Player2scores = document.getElementById("h2")
let start = document.getElementById("child7")
let circle = document.getElementsByClassName("circle")
let boolean = true 
let circle2 = document.getElementsByClassName("circle2")
let result = document.getElementById("result")
let count1 = 0
let count2 = 0
start.onclick=function(){
    if(boolean == true){
        let random1=Math.floor(Math.random()* 6)
        let random2=Math.floor(Math.random()* 6)
        console.log("1+1 = 11")
        for(let i = 0 ;i < 6 - random1;i ++){
            circle[i].style.display = "none"
        }
       for(let i = 0 ;i < 6 - random2;i ++){
            circle2[i].style.display = "none"
        }
         for(let i = random1;i < 6;i ++){
            circle[i].style.display = "block"
        }
        for(let i = random2 ;i < 6;i ++){
            circle2[i].style.display = "block"
        }
        if( random1 < random2){
            count1 ++
            result.textContent = "Player1 win"
            Player1scores.textContent = count1
        }
        else if (random1 > random2){
            result.textContent = "Player2 win"
            count2 ++
            Player2scores.textContent = count2
        }
        else {
            result.textContent = "draw"
        }
    }
}
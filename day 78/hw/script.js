let color = document.getElementById("btn")
let colortext =  document.getElementById("colorText")
color.onclick=function(){
    let hex = "abcdef0123456789"
    let res = "#"
    for(let i = 0; i < 6;i++){
        let rend = Math.floor(Math.random() *16)
        res+=hex[rend]
    }
    document.body.style.backgroundColor = res
    colortext.textContent= "Background Color : "+res
    colorText.style.color=res
}
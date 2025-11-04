// 1)შექმენით random image picker, გვქონდეს 5 ცალი სურათი ფოლდერში და 1 ცალი ღლაკი დაა 1 ცალი img თეგი საიტზე, შემდეგ ამ ღილაკის დაჭერაზე ეს სურათი რენდომულად უნდა გახდეს ამ 5 სურათიდან ერთ ერთი
// მინიშნება:  სურათების src ეები შეინახეთ სიაში [] და შემდეგ მაგ სიიდან რენდომულად აიღეთ ერთი src
{
"image 12.png"
"image 13.png"
"image 19.png"
"image 21.png"
"image 22.png"  
}
let image = []
let button = document.getElementById("button")
button.onclick = function(){
    console.log(Math.floor(Math.random() * 5)+1)
}

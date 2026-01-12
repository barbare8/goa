let userNum = Number(prompt("enter number"))

//with if else
if (userNum > 50){
    console.log("BIG")
}else if (userNum < 50, < 25){
    console.log("MEDIUM")
}else {
    console.log("SMALL")}
    


  // with ternary operator
userNum === > 50 ? console.log("BIG") : userNum === <50,>25  ? console.log("MEDIUM") : console.log("SMALL")



 //with switch case
switch(userNum){
    case > 50:
        console.log("BIG")
        break
    case <50 , >25:
        console.log("MEDIUM")
        break
    default:
        console.log("SMALL")
        break
}
let userName = prompt("enter your name")


//with if else
if (userName === "ALeksandre"){
    console.log("you are mentor")
}else if (userName === "daviti"){
    console.log("you are controller")
}else {
    console.log("i dont know")}
    


  // with ternary operator
 userName === "ALeksandre" ? console.log("you are mentor") : userName === "daviti"  ? console.log("you are controller") : console.log("i dont know")



 //with switch case
switch(userName){
    case "Aleksandre":
        console.log("you are mentor")
        break
    case "daviti":
        console.log("you are controller")
        break
    default:
        console.log("i dont know ")
        break
}
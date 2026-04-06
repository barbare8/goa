// 1) მასივების რეფერენსი
// პირობა: შექმენი ახალი მასივი, რომელიც უბრალოდ „სარკეა“ საწყისის. დაამატე ახალი ელემენტი და ნახე ორივე მასივი როგორ შეიცვალა.
let arr1 = [1, 2, 3]; 
let arr2 = arr1;      
arr2.push(4);          

console.log(arr1);     
console.log(arr2);     




// 2) spread ოპერატორი მასივზე



let oldArray = [1, 2, 3];


let newArray = [...oldArray, 4, 5];

console.log("Old array:", oldArray); 
console.log("New array:", newArray); 


newArray.push(6);

console.log("Old array after push:", oldArray); 
console.log("New array after push:", newArray);



// 3) ობიექტების რეფერენსი
let person = {
    name: 'Davit',
    age: 17,
    weight: 70
};


let newPerson = person;


newPerson.height = 180;

console.log("Old object:", person);


console.log("New object:", newPerson);


// 
let oldArray1 = [1, 2, 3];


let newArray2 = [...oldArray, 4, 5, 6];

console.log("Old array:", oldArray); 
console.log("New array:", newArray); 




// 6) მასივი + rest


let numbers = [10, 20, 30, 40, 50];


let [first, second, ...rest] = numbers;

console.log("First:", first);    
console.log("Second:", second);   
console.log("Rest:", rest);     



// 7) ობიექტი + rest
let person1 = {
    name: 'Davit',
    age: 17,
    weight: 70
};


let { name, ...restobj } = person;

console.log("Name:", name);       
console.log("Rest of object:", restobj); 


// 8) ფუნქცია + rest
function printNumbers(...numbers) {
    console.log("Numbers received:", numbers);
}

printNumbers(1, 2, 3);        
printNumbers(10, 20);          
printNumbers(5, 15, 25, 35);   

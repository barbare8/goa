try {
  const x = 10;
  x = 20; 
} catch {
  console.log(error.message);
}
"------------------------------------------------------------------------"
try {
  JSON.parse("{name: 'nika'}"); 
} catch {
  console.log("Invalid JSON");
}
"------------------------------------------------------------------------"

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch  {
    console.log(error.message);
  }
}

"-----------------------------------------------------------------------"

divide(10, 0);
try {
  let obj = null;
  console.log(obj.name); 
} catch {
  console.log("Property error");
}
"----------------------------------------------------------------" 
try {
  let arr = ["hello", "world"];
  let value = arr[5];
  console.log(value.toUpperCase()); 
} catch {
  console.log("Out of bounds or invalid operation");
}
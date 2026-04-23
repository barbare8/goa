let p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Eat");
  }, 2000);
});

let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Sleep");
  }, 1000);
});

p1.then((result1) => {
  console.log(result1);
  return p2;
}).then((result2) => {
  console.log(result2);
});
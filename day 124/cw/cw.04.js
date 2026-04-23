let t1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task 1");
  }, 3000);
});
let t2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task 2");
  }, 2000);
});

let t3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task 3");
  }, 1000);
});

Promise.race([t1, t2, t3])
  .then((result) => {
    console.log(result);
  });
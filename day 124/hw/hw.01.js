const startPromise = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Start");
    resolve();
  }, 1000);
});

const finishPromise = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Finish");
    resolve();
  }, 2000);
});

startPromise.then(() => finishPromise);


"--------------------------------------------------------------"


new Promise((resolve) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
})
  .then((num) => num * 2)
  .then((num) => num + 10)
  .then((result) => console.log(result)); 




"------------------------------------------------------------------------"
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("One"), 4000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Two"), 2000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("Three"), 3000);
});

Promise.race([p1, p2, p3]).then((result) => {
  console.log(result); // "Two"
});



"--------------------------------------------------------------------------------------"
new Promise((resolve) => {
  setTimeout(() => {
    resolve("Loaded!");
  }, 3000);
}).then((message) => {
  console.log(message);
});

"-----------------------------------------------------------------------------"
const step1 = new Promise((resolve) => {
  resolve("Step 1");
});

const step2 = new Promise((resolve) => {
  resolve("Step 2");
});

step1
  .then((result) => {
    console.log(result);
    return step2;
  })
  .then((result) => {
    console.log(result);
  });
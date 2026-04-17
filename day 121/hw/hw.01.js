
const p1 = new Promise((resolve, reject) => {
  resolve("Hello");
});

p1.then(result => {
  console.log(result);
});



const p2 = new Promise((resolve, reject) => {
  reject("Error");
});

p2.catch(error => {
  console.log(error);
});



const p3 = new Promise((resolve, reject) => {
  resolve(5);
});

p3
  .then(num => num * 2)
  .then(result => {
    console.log(result);
  });



const p4 = new Promise((resolve, reject) => {
  resolve("Start");
});

p4
  .then(text => text + " -> End")
  .then(result => {
    console.log(result);
  });



const p5 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Success");
  } else {
    reject("Fail");
  }
});

p5
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
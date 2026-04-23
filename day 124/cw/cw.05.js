let randomPromise = new Promise((resolve, reject) => {
let num = Math.random();

  if (num < 0.5) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

randomPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
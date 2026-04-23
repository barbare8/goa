let myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello");
  }, 2000);
});

myPromise
  .then((result) => {
    return result + " World";
  })
  .then((finalResult) => {
    console.log(finalResult);
  });
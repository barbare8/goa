let list = ["ana", 2, "gio", 5, "nino", 8, "luka", 7];
let result = [];
for (let i = 0; i < list.length; i++) {
  let item = list[i];

  if (typeof item === "string" && i % 2 === 1) {
    result.push(item);
  }
  if (typeof item === "number" && item % 2 === 1) {
    result.push(item);
  }
}
console.log(result);
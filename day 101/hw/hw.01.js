let names = ["ana", "gio", "mariam", "anamaria", "axtona", "nino"];
let result = [];

for (let i = 0; i < names.length; i++) {
  let name = names[i];
  if (name[0] === "a" && name[name.length - 1] === "a") {
    result.push(name);
  }
}
console.log(result);

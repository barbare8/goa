const names = [
  "ana",
  "nino",
  "giorgi",
  "level",
  "radar",
  "dato",
  "madam",
  "anna",
  "luka",
  "civic"
];
const palindromes = names.filter(name => {
  return name === name.split('').reverse().join('');
});

console.log(palindromes);
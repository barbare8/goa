// 2)შექმენით სია სადაც იქნება ბევრი სტრინგი, ეს სტრინგეი უნდა იყოს განაწილებული რომ სიტყვა გამოვიდეს
//  ['n', 'i', 'g', 'g', 'e', 'r']
// და შეემდეგ reduce ით ეს სტრინგები გააერთიანდე

let letters = ['g', 'r', 'e', 'n', 'd', 'm', 'a'];
let joinedWord = letters.reduce(function(acc, letter) {
  return acc + letter;
}, "");
console.log(joinedWord);
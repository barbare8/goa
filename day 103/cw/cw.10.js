// შექმენით სია სიტყვებით. filter-ით დატოვეთ მხოლოდ ის სიტყვები, რომლის სიგრძე > 5. შემდეგ map-ით გადააკეთეთ ისინი დიდ ასოებად.
let words = ["apple", "banana", "cherry", "date", "elderberry"];
let longWords = words.filter(word => word.length > 5);
let uppercaseWords = longWords.map(word => word.toUpperCase());

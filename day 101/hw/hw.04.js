//JavaScript-ში არსებობს: array.filter() array.map()

//  Python-ში ასევე არსებობს:

// filter()

// map()

// ანუ კონცეფცია ერთნაირია:

// filter --> რაღაცების დატოვება პირობის მიხედვით

// map --> თითოეული ელემენტის შეცვლა/გადაყვანა

// filter – განსხვავება
// JavaScript
// let numbers = [1, 2, 3, 4, 5];

// let result = numbers.filter(function (n) {
//   return n % 2 === 0;
// });

// console.log(result); // [2, 4]

// Python
// numbers = [1, 2, 3, 4, 5]

// result = list(filter(lambda n: n % 2 == 0, numbers))

// print(result)  # [2, 4]


//  განსხვავება:

// JS-ში filter არის array-ის მეთოდი

// Python-ში filter არის ფუნქცია

// Python-ში შედეგი უნდა გადაიყვანო list()-ში

// map – განსხვავება
// JavaScript
// let numbers = [1, 2, 3];

// let result = numbers.map(function (n) {
//   return n * 2;
// });

// console.log(result); // [2, 4, 6]

// Python
// numbers = [1, 2, 3]

// result = list(map(lambda n: n * 2, numbers))

// print(result)  # [2, 4, 6]


//  განსხვავება:

// JS → array.map()

// Python → map(function, iterable)

// Python-ში ისევ საჭიროა list()

// მთავარი განსხვავებები მოკლედ
// თემა	JavaScript	Python
// სად არის	array-ის მეთოდი	ცალკე ფუნქცია
// სინტაქსი	უფრო ვიზუალური	უფრო ფუნქციური
// შედეგი	array	iterator (საჭიროა list())
// beginner style	ხშირად filter/map	ხშირად list comprehension
// Python-ში რატომ არ უყვართ ხშირად map/filter?

// Python-ში დამწყებთათვის ეს უფრო პოპულარულია 
// result = [n for n in numbers if n % 2 == 0]


// JS-ში კი filter/map ძალიან სტანდარტულია.
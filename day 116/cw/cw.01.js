// const obj = {
//   arr: [
//     { level: [10, 50, 100] },
//     {
//       level: [20, 40, 60],
//       students: [
//         { name: "jemala", surname: "barkalaia", score: [8, 8, 10] },
//         { name: "jumbera", surname: "lamazi", score: [10, 7, 9] },
//       ],
//     },
//   ],
// };


const firstItem = obj.arr[0];
const secondItem = obj.arr[1];


const firstLevels = firstItem.level;
const secondLevels = secondItem.level;

const studs = secondItem.students;
const student1 = studs[0];
const student2 = studs[1];


const jemalaName = student1.name;
const jemalaScore = student1.score;



const jumberaName = student2.name;
const jumberaScore = student2.score;

console.log(firstLevels)
console.log(secondLevels)
console.log(s1Name, s1Score)
console.log(s2Name, s2Score)
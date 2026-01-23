// 1 Regular function
function introduce(name, age) {
  return `მე ვარ ${age} წლის და მქვია ${name}`;
}

// 2 Function expression
const introduceExpr = function(name, age) {
  return `მე ვარ ${age} წლის და მქვია ${name}`;
};

// 3 Arrow function
const introduceArrow = (name, age) => `მე ვარ ${age} წლის და მქვია ${name}`;

// გამოყენება
console.log(introduce("გიორგი", 25));      // მე ვარ 25 წლის და მქვია გიორგი
console.log(introduceExpr("ანა", 30));      // მე ვარ 30 წლის და მქვია ანა
console.log(introduceArrow("ნიკა", 20));    // მე ვარ 20 წლის და მქვია ნიკა
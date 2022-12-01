// npx ts-node 1dec.ts
const fs = require("fs");
// const data: string = fs.readFileSync("./samples/1dec.txt", "utf8");
const data: string = fs.readFileSync("./data/1dec.txt", "utf8");

console.time("part 1");
const numbers = data
  .split("\n\n")
  .map((l) => l.split("\n").reduce((a, b) => Number(a) + Number(b), 0));

const max = Math.max(...numbers);
console.log(max);
console.timeEnd("part 1");

console.time("part 2");
const topThree = numbers
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, b) => a + b);
console.log(topThree);

console.timeEnd("part 2");

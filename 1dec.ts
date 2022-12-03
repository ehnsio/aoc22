import getData from "./data";
const [_ts, _file, date, test] = process.argv;
const data: string = getData(date, test);

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

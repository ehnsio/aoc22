import getData from "./data";
const [_ts, _file, date, test] = process.argv;
const data: string = getData(date, test);

type combination = "A X";
const arr = data.split("\n") as combination[];

const values = {
  "A X": 4,
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
};

const tacticValues = {
  "A X": 3,
  "A Y": 4,
  "A Z": 8,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 2,
  "C Y": 6,
  "C Z": 7,
};

console.time("part1");
const total = arr.reduce((a, c) => a + values[c], 0);
console.log(total);
console.timeEnd("part1");

console.time("part2");
const total2 = arr.reduce((a, c) => a + tacticValues[c], 0);
console.log(total2);
console.timeEnd("part2");

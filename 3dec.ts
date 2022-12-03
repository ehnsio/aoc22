import getData from "./data";
const [_ts, _file, date, test] = process.argv;
const data: string[] = getData(date, test).split("\n");

// Index aplhabet to calc
const letters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = letters.toUpperCase();
const lettersArray = `0${letters}${upperCaseLetters}`.split("");

console.time("part1");

const splitStrings = data.map((s) => [
  s.slice(0, s.length / 2),
  s.slice(s.length / 2),
]);

const sameLetters = splitStrings.map((s) => {
  const first = s[0].split("");
  return first.find((letter) => s[1].includes(letter)) as string;
});

const part1 = sameLetters.reduce((a, c) => a + lettersArray.indexOf(c), 0);

console.log(part1);
console.timeEnd("part1");

console.time("part2");

//Map with three rows and then filter out every third
const splitStrings2 = data
  .map((q, i) => [data[i], data[i + 1], data[i + 2]])
  .filter((d, i) => i % 3 === 0);

const sameLetters2 = splitStrings2.map((s) => {
  const first = s[0].split("");
  return first.find(
    (letter) => s[1].includes(letter) && s[2].includes(letter)
  ) as string;
});

const part2 = sameLetters2.reduce((a, c) => a + lettersArray.indexOf(c), 0);

console.log(part2);
console.timeEnd("part2");

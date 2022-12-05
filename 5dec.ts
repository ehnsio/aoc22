import getData from "./data";
const [_ts, _file, date, test] = process.argv;
const data: string[] = getData(date, test).split("\n\n");

let stacks: string[][] = [[], [], [], [], [], [], [], [], []];

const moveCrates = (amount: number, from: number, to: number) => {
  for (let i = 0; i < amount; i++) {
    const fromValue = stacks[from - 1].pop() as string;
    stacks[to - 1].push(fromValue);
  }
};

console.time("part1");
data[0]
  .split("\n")
  .reverse()
  .forEach((s) => {
    for (let i = 1; i < s.length; i++) {
      if ((i - 1) % 4 === 0 || i === 1) {
        const char = s.charAt(i);
        const index = (i - 1) / 4;
        if (s.charAt(i) !== " ") {
          stacks[index].push(char);
        }
      }
    }
  });
const moves = data[1].split("\n");

moves.forEach((move) => {
  moveCrates(
    Number(move.split(" ")[1]),
    Number(move.split(" ")[3]),
    Number(move.split(" ")[5])
  );
});

const part1 = stacks.map((s) => s[s.length - 1]).join("");
console.log(part1);
console.timeEnd("part1");

console.time("part2");

console.timeEnd("part2");

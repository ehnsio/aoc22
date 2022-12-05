import getData from "./data";
const [_ts, _file, date, test] = process.argv;
const data: string[] = getData(date, test).split("\n");

const isFullyContained = (a: string, b: string, overlap?: boolean) => {
  const aMin = Number(a.substring(0, a.indexOf("-")));
  const bMin = Number(b.substring(0, b.indexOf("-")));
  const aMax = Number(a.substring(a.indexOf("-") + 1, a.length));
  const bMax = Number(b.substring(b.indexOf("-") + 1, b.length));

  const min = Math.min(aMin, bMin);
  const max = Math.max(aMax, bMax);

  return overlap
    ? !Boolean(aMin > bMax || bMin > aMax)
    : (min === aMin && max === aMax) || (min === bMin && max === bMax);
};

console.time("part1");
const array = data.map((d) => d.split(","));
const part1 = array.filter((d) => isFullyContained(d[0], d[1])).length;
console.log(part1);
console.timeEnd("part1");

console.time("part2");
const part2 = array.filter((d) => isFullyContained(d[0], d[1], true)).length;
console.log(part2);
console.timeEnd("part2");

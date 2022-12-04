const { readFileSync, promises: fsPromises } = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\n\n/);
  // console.log(arr);
  return arr;
}

let sample = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

let carriers = syncReadFile('day01_input.txt');
let elves = [];

for (let elf in carriers) {
  let nutrients = carriers[elf]
    .split(/\n/)
    .map(Number)
    .reduce((partialSum, a) => partialSum + a, 0);
  elves.push({ elf: Number(elf) + 1, nutrients: nutrients });
}
elves = elves.sort((a, b) => b.nutrients - a.nutrients);

// console.log(elves);
console.log('P1: This elf is carrying the most nutrients:', elves[0]);
console.log(
  'P2: The top 3 elves carrying the most nutrients: Elves',
  elves[0].elf,
  elves[1].elf,
  elves[2].elf,
  'Carrying:',
  elves[0].nutrients + elves[1].nutrients + elves[2].nutrients,
  'nutrients'
);

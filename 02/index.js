const fs = require('fs');

const parseInput = lines =>
  lines
    .map(line => line.split(' '))
    .reduce((acc, line) => {
      const [op, amount] = line;
      const num = parseInt(amount);

      switch (op) {
        case 'forward':
          acc.horizontal += num;
          acc.depth += (acc.aim * num);
          break;
        case 'down':
          acc.aim += num;
          break;
        case 'up':
          acc.aim -= num;
          break;
      }

      return acc;
    }, {horizontal: 0, depth: 0, aim: 0});

fs.readFile('input', (err, data) => {
  if (err) throw err;
  const lines = data.toString().split('\n');
  const {horizontal, depth} = parseInput(lines);
  console.log(horizontal * depth);
});

const fs = require('fs');

const countIncreases = (input) => {
  // Track increases
  let counter = 0;
  
  // Track which number we're on
  let pointer = 0;

  while (pointer < input.length - 1) {
    if (input[pointer + 1] > input[pointer]) {
      counter += 1;
    }

    pointer += 1;
  }

  return counter;
};

const groupThrees = (input) => {
  let pointer = 0;

  const groups = [];

  while (pointer + 2 <= input.length - 1) {
    const group = [input[pointer], input[pointer + 1], input[pointer + 2]]
    groups.push(group.reduce((acc, val) => acc + val, 0));

    pointer += 1;
  }

  return groups;
};

fs.readFile('input', (err, data) => {
  if (err) throw err;
  const lines = data.toString().split('\n').map(i => parseInt(i));
  console.log(countIncreases(groupThrees(lines)));
});

const fs = require('fs');

const countIncreases = (input) => {
  // Track increases
  let counter = 0;
  
  // Track which number we're on
  let pointer = 0;

  while (pointer < input.length - 1) {
    if (pointer == 0) {
      console.log(input[pointer] + ' (N/A, no previous measurement)')
    }

    if (input[pointer + 1] > input[pointer]) {
      counter += 1;
      console.log(input[pointer + 1] + ' (increased)')
    } else if (input[pointer + 1] > input[pointer]){
      console.log(input[pointer + 1] + ' (decreased)')
    }

    pointer += 1;
  }

  console.log(counter);
};

fs.readFile('input', (err, data) => {
  if (err) throw err;
  const lines = data.toString().split('\n').map(i => parseInt(i));
  countIncreases(lines);
});

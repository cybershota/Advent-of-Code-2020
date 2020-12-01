const input = require('./1-1-input.js');

console.log(input.length);

function check2020(current, i) {
  for (let j = i + 1; j <= input.length; j++) {
    if (current + input[j] === 2020) {
      let result = current + input[j];
      console.log('Found it! ', current + ' + ' + input[j] + ' = ' + result);
      console.log('Answer: ', current * input[j]);
    }
  }
}

for (let i = 0; i <= input.length; i++) {
  let current = input[i];
  check2020(current, i);
}

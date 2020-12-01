const input = require('./1-1-input.js');

function thoughNumber(self1, self2, preAdd) {
  for (let k = 0; k <= input.length; k++) {
    if (input[k] !== self1 || input[k] !== self2) {
      if (preAdd + input[k] === 2020) {
        let result = self1 + self2 + input[k];
        console.log('Found it! ', self1 + ' + ' + self2 + ' + ' + input[k] + ' = ' + result);
        console.log(self1 * self2 * input[k]);
      }
    }
  }
}

function checkBelow2020(current, i) {
  for (let j = i + 1; j <= input.length; j++) {
    if (current + input[j] < 2020) {
      let preResult = current + input[j];
      thoughNumber(current, input[j], preResult);
    }
  }
}

for (let i = 0; i <= input.length; i++) {
  let current = input[i];
  checkBelow2020(current, i);
}

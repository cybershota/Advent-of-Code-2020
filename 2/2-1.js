const input = require('./2-1-input-formatted');

let validCount = 0;
let countIndex = 0;

input.forEach((e) => {
  const matchArray = [...e.password.matchAll(e.char)];
  if (matchArray.length >= e.requireStart && matchArray.length <= e.requireEnd) {
    validCount++;
    countIndex++;
  } else {
    countIndex++;
  }
});

console.log(validCount);
console.log(countIndex);

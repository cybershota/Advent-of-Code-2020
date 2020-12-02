const input = require('./2-1-input-formatted');

let validCount = 0;
let countIndex = 0;

input.forEach((e) => {
  // console.log('password', e.password);
  // console.log('requireStart', e.requireStart);
  // console.log('requireEnd', e.requireEnd);
  // console.log('char', e.char);
  // console.log('position one', e.password[e.requireStart - 1]);
  // console.log('position two', e.password[e.requireEnd - 1]);
  if (
    (e.password[e.requireStart - 1] === e.char && e.password[e.requireEnd - 1] !== e.char) ||
    (e.password[e.requireStart - 1] !== e.char && e.password[e.requireEnd - 1] === e.char)
  ) {
    validCount++;
    countIndex++;
    console.log('valid');
  } else {
    countIndex++;
    console.log('NO');
  }
});

console.log(validCount);
console.log(countIndex);

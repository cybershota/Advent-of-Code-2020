const map = require('./3-1-input-format');

let countArray = [];
let counter = 0; //最大 31
let countRow = 0;

map.forEach((m, index) => {
  if (index === 0 && countRow === 0) {
    console.log('start');
    counter += 3;
    countRow++;
    console.log('行: ', index, 'right: ', counter, '值: ', m[counter]);
    return;
  }
  if (index % 2 !== 0) {
    console.log('行: ', index, 'down: ', counter, '值: ', m[counter]);
    countArray.push(m[counter]);
    counter += 3;
    countRow++;
    if (counter >= 31) {
      counter = Math.abs(31 - counter);
    }
    return;
  }
  if (index % 2 === 0 && countRow !== 0) {
    console.log('行: ', index, 'right: ', counter, '值: ', m[counter]);
    countArray.push(m[counter]);
    counter += 3;
    countRow++;
    if (counter >= 31) {
      counter = Math.abs(31 - counter);
    }
    return;
  }
});

console.log(countArray);
console.log(countArray.filter((e) => e === '#').length);

const fs = require('fs');

function writeFile(data) {
  const writeData = `const input = [${data}]\n module.exports = input`;

  fs.writeFile('2-1-input-formatted.js', writeData, function (err) {
    if (err) console.log(err);
    else console.log('Write operation complete.');
  });
}

fs.readFile('2-1-input.txt', function (err, data) {
  if (err) throw err;
  dataArray = data.toString().split('\n');
  let formatArray = [];
  dataArray.forEach((e) => {
    const formatE = e
      .replace(/(?!.)*(?![a-z])\:/g, '')
      .replace(/^\b/, '{"requireStart":')
      .replace(/\-/, ',"requireEnd":')
      .replace(/(?!.)*\s/, ',"char":')
      .replace(/\s/, ',"password":')
      .replace(/(?<=\"char\"\:)[a-z]/g, '"$&"')
      .replace(/(?<=\"password\"\:)[a-z]*/g, '"$&"')
      .concat('}');
    const jsonE = JSON.parse(JSON.stringify(formatE));
    formatArray.push(jsonE);
  });
  writeFile(formatArray);
});

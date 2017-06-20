const fs = require('fs');
const files = [
  "./files/mongodb.txt",
  "./files/expressjs.txt",
  "./files/angularjs.txt",
  "./files/nodejs.txt",
  "./files/fullStack.txt"
];

function readFile(file, index) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
    index++;
    if (index < files.length) {
      readFile(files[index], index);
    }
  });
}

readFile(files[0], 0);

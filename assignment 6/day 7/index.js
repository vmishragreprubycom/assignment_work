const fs = require('fs');

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    })
  });
}

readFile("./files/mongodb.txt")
  .then((result) => {
    console.log(result);
    return readFile("./files/expressjs.txt");
  })
  .then((result) => {
    console.log(result);
    return readFile("./files/angularjs.txt");
  })
  .then((result) => {
    console.log(result);
    return readFile("./files/nodejs.txt");
  })
  .then((result) => {
    console.log(result);
    return readFile("./files/fullStack.txt");
  })
  .then((result) => {
    console.log(result);
    return readFile("./files/fullStack.txt");
  })
  .catch((err) => {
    console.log(err);
  });

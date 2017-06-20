const fs = require('fs');

function readFile(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) return reject(err);
      resolve(data);
    })
  });
}

readFile("./files/mongodb.txt").then(function(data) {
  console.log(data);
  return readFile("./files/expressjs.txt");
}).then(function(data) {
  console.log(data);
  return readFile("./files/angularjs.txt");
}).then(function(data) {
  console.log(data);
  return readFile("./files/nodejs.txt");
}).then(function(data) {
  console.log(data);
  return readFile("./files/fullStack.txt");
}).then(function(data) {
  console.log(data);
  return readFile("./files/fullStack.txt");
}).catch(function(err) {
  console.log(err);
});

const fs = require('fs');
const files = ["./files/mongodb.txt","./files/expressjs.txt","./files/angularjs.txt","./files/nodejs.txt","./files/fullStack.txt"];

function fileRead(file,index) {
  fs.readFile(file,'utf8',function(err,data) {
    if(err) 
      console.log(err);
    console.log(data);
    index++;
    if(index<files.length) 
      fileRead(files[index],index);
  });
}

fileRead(files[0],0);

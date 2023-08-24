const path = require("path");
// console.log(path);
// console.log(path.extname(__filename));
// console.log(path.dirname(__filename));

// console.log(path.join(__dirname,"api","script1.js"));

//FileSystem

//Create File
// const fs=require("fs");
// fs.mkdir(path.join(__dirname,"API2/"),{},(err)=>{
//     if(err)throw err;
// });

//Delete File

// const fs=require("fs");
// fs.rmdir(path.join(__dirname,"API2/"),{recursive:true},(err)=>{
//     if(err)throw err;
// })

//Write File

const fs = require("fs");

// const user="Saneep";
// fs.writeFile(path.join(__dirname,"API","api.txt"),`User name:${user}`,(err)=>{
//     if(err)throw err;
// });

//Append File

const user = "Sani";
fs.appendFile(
  path.join(__dirname, "API", "api.txt"),
  `\nUser name:${user}`,
  (err) => {
    if (err) throw err;
  }
);

//Read File

fs.readFile(path.join(__dirname, "API", "api.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

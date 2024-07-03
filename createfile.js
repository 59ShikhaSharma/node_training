//create - file
//1- fs.appendFile();
//it will not replace the new content add in the existing file
//and if the file doesnot exist it will create a new file
// var fs = require('fs');
// fs.appendFile('textfile1', ' Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//2- fs.open();
//it takes a flag as second argument if flag is 'w' for writting the file will be opened for writting
//and if the file doesnot exist it will create a new empty file
// var fs = require('fs');
// fs.open('textfile3', 'r', function(err,fd) {
//   if(err) throw err;
//   console.log('saving');
// })

//using async await
// const fs = require('fs');
// const util = require('util');
// async function example() {
//   const open = util.promisify(fs.open);
//   const fd = await open('textfile3', 'r', function (err, fd) {
//     if (err) throw err;
//     console.log('saving');
//   })
// }
// example();

//3- fs.writeFile();
//it replces the already existing content and write the new content
//and if the file doesnot exist it will create a new file
// var fs = require('fs');
// fs.writeFile('textfile2','Hollaa', function(err) {
//   if(err) throw err;
//   console.log("Written");
// });
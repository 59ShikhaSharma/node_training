//update-file
//File can be updated using 2 ways
//1- fs.appendFile(); 
//it will append the specified content at the end of the specified file
// var fs = require('fs');
// fs.appendFile('updatefile', 'This is my new text', function(err) {
//     if(err) throw err;
//     console.log('Updated');
// })

//2- fs.writeFile();
//it replaced the specified file and content
var fs = require('fs');
fs.writeFile('updatefile.txt', 'This is new content', function(err) {
    if(err) throw err;
    console.log('Replaced');
})
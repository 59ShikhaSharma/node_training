// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('demofile.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// const fs = require('fs');
// fs.readFile('testtext.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

//use the synchronous version fs.readFileSync():
const fs = require('fs');
try {
  const data = fs.readFileSync('testtext.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
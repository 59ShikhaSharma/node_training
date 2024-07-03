console.log("Hey Node");
console.log("hey this is node hellofdfdfd");
//process.exitCode(0);

const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

console.log(process.env.NAME)
// console.log(process.env)
console.log(process.env.PROFESSION)


// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);


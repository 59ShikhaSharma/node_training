//Reading from a stream , create a readable stream 
//Handle stream events--> data , end and error
const fs = require('fs');
const http = require('http');

const server = http.createServer();
server.on('request', (req,res) => { 
    // fs.readFile('input.txt',function(err,data) {
    //     if (err) return console.log(err);
    //     res.end(data.toString());
    // });

    const rstream = fs.createReadStream("input.txt");
    rstream.on("data",(chunkdata) => {
        res.write(chunkdata);
    });
    rstream.on('end',()=> {
        res.end();
    });
    rstream.on('error', (err) => {
        console.log(err);
        res.end("file not found");
    })
})


server.listen(8000,"127.0.0.1");

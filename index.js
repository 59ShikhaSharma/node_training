const http = require("http");
const fs = require('fs');

const server = http.createServer((req,res) => {
    if(req.url === "/") {
        res.end("Hello from the Home sides");

    } else if (req.url === "/about") {
        res.end("Hello from the about side");
    } else if(req.url === "/contact") {
        res.end("Hello from the contact side ");
    }else if(req.url === "/userapi") {
        fs.readFile(`${__dirname}/CreateApi/createApi.json`, "utf-8", (err,data) => {
            console.log(data);
            const objData = JSON.parse(data);
            // res.end(data );
            res.end(objData[1].name);

        })
       

    } 
    else {
        res.writeHead(404, {"Content-type":"text/html"});
        res.end("<h1> 404 error pages. Page does not exist </h1>")
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port no 8000");
})
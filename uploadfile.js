const http = require('http');
const fs = require('fs');

const { extractFilename } = require('./UploadFile/extractFileName')
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload/singleFile') {
    let body = [];
    let fileName = "";
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const buffer = Buffer.concat(body);
      console.log(body.toString());
      fs.writeFile(`${__dirname}/public/singleFile.csv`, buffer.toString(), (err) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error saving file');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File uploaded successfully');
      });
    });
  }
  else if (req.method === 'POST' && req.url === '/upload/multiExtension') {
    let body = [];
    let fileName = "";
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      try {
        fileName = extractFilename(body.toString());
        console.log('Extracted filename:', fileName);
      } catch (error) {
        console.error('Error extracting filename:', error.message);
      }
      const buffer = Buffer.concat(body);
      fs.writeFile(`${__dirname}/public/${fileName}`, buffer.toString(), (err) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error saving file');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File uploaded successfully');
      });
    });
  }
  else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method not allowed');
  }
});
server.listen(8000, () => {
  console.log('Server is running on port 8000');
});
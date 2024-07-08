const express = require('express'); 
const app = express(); 
const port = 3000;

const test = require('./routes/httpmethods'); 

app.use('/test', test); 

app.listen(port , () => {
    console.log(`Example app listening at  http://localhost:${port}`);
})

const express = require('express');
const app = express();
const port = 3000;

const homeroute=require("./routes/home");
const loginroute=require("./routes/login");

// app.get("/",(req,res) => {
//     res.send("Hello Worjhgjggd");
// })


// app.get("/about",(req,res) => {
//     res.send("About");
// })

app.use("/",homeroute); 
app.use("/",loginroute);

app.listen(port , () => {
    console.log(`Example app listening at  http://localhost:${port}`);
})







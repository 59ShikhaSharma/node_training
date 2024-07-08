const mysql = require('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"@DRsharma05",
    database:"coursesdb"
});

con.connect((err)=> {
    if(err) {
        console.warn("error");
    }

    
    else {
        console.log("Connected");
    }
})



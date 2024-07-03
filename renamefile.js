var fs = require('fs');
fs.rename('updatefile','updatefile.txt', function(err) {
    if(err) throw err;
    console.log("Renamed");
})
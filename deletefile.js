var fs = require('fs');
fs.unlink('demodelete.txt', function(err) {
    if(err) throw err;
    console.log("Deleted");
})
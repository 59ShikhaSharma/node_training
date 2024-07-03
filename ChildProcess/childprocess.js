const cp = require('child_process');
//cp.exec('start chrome https://nodejs.org/api/child_process.html#child-process');
const output  = cp.execSync('textfile.txt')
console.log("output" + output);
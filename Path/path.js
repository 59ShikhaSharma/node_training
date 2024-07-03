const path = require('path');
const testtext = 'testtext.txt';

console.log(path.dirname(testtext));
console.log(path.basename(testtext));
console.log(path.basename(testtext, path.extname(testtext))); 
console.log(path.extname(testtext));
console.log(path.parse(testtext));

const myPath = 'desktop';
console.log(path.join('/', 'user', myPath, 'testtext.txt'));
console.log(path.resolve('testtext.txt'));
console.log(path.resolve('/etc','testtext.txt'));
console.log(path.normalize('/users/desktop/..//testtext.txt'));
console.log(myPath.name);
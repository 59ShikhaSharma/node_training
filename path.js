const path = require('path');
const testtext = 'testtext.txt';

console.log(path.dirname(testtext));
console.log(path.basename(testtext));
console.log(path.basename(testtext, path.extname(testtext))); 
console.log(path.extname(testtext));

const name = 'desktop';
console.log(path.join('/', 'user', name, 'testtext.txt'));
console.log(path.resolve('testtext.txt'));
console.log(path.resolve('/etc','testtext.txt'));
console.log(path.normalize('/users/desktop/..//testtext.txt'));
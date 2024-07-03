// const fs = require('fs');
// fs.stat('testtext.txt', (err,stats)=> {
//     if(err) console.log(err);

//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
//     console.log(stats.isSymbolicLink());
//     console.log(stats.size);
// })

const fs = require('fs/promises');
async function example() {
  try {
    const stats = await fs.stat('testtext.txt');
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.size);
  } catch (err) {
    console.log(err);
  }
}
example();


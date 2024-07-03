// const fs = require('fs');
// const content ="Here is the write file content";
// fs.writeFile('testtext.txt',content, err => {
//     if(err) 
//         console.log(err);
// });

const fs = require('fs/promises');
async function example() {
  try {
    const content = 'Some content!';
    await fs.appendFile('testtext.txt', content);
  } catch (err) {
    console.log(err);
  }
  console.log("Written successfully");
}
example();
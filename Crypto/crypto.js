const crypto = require("crypto");
const secret = 'abcdefg';

const hash = crypto.createHmac('sha256',secret) .update("I love cupcakes").digest('hex');
console.log(hash);

// const crypto = require("crypto")
// const data = "This is the data that need to be encrypted"
// const key = "password@111"

// // Encrypte the data
// const encrypted = crypto.encrypt(data, key).toString();
// console.log("Encrypted data")

// // Printing the encrypted data
// console.log(encrypted)
// console.log("Decrypted data")

// // Decrypting the data
// const decrypted = crypto.decrypt(encrypted, key)
//                                     .toString(crypto.enc.Utf8)
// console.log(decrypted)



// var crypto = require('crypto');

// var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
// var mystr = mykey.update('34feb914c099df25794bf9ccb85bea72', 'hex', 'utf8')
// mystr += mykey.final('utf8');

// console.log(mystr); //abc

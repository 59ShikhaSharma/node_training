var moment = require('moment-timezone');

console.log(moment().tz("America/Los_Angeles").format());

var a = moment.tz("2013-11-18 11:55", "Asia/Taipei");
var b = moment.tz("2013-11-18 11:55", "America/Toronto");
var c = moment.tz("2024-07-04 12:15", "Asia")

console.log(a.format()); 
console.log(b.format()); 

console.log(a.utc().format()); 
console.log(b.utc().format()); 

var m = moment.tz("2013-11-18 11:55", "America/Toronto");
console.log(m.tz());  // America/Toronto
var m = moment.tz("2013-11-18 11:55");
console.log(m.tz() === undefined);  // true
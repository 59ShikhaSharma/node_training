const EventEmitter = require("events");
const event = new EventEmitter();

event.on('sayMyName', () => {
    console.log("Your name is Shikha");
})

event.on('sayMyName', () => {
    console.log("Your name is Sharma");
})

event.emit("sayMyName");

event.on("CheckPage", (sc,msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);

});

event.emit("CheckPage", 200, "ok");
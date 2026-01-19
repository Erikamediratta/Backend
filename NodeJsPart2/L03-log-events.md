//NOW RENAME INDEX.JS TO logEvents.js

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    console.log(logItem);

    try {
        await fsPromises.appendFile(
            path.join(__dirname, 'logs', 'eventlog.txt'),
            logItem
        );
    } catch (err) {
        console.error(err);
    }
};

//explanation:
//logEvents is a function which takes message as input
//async allows await inside
//fsPromises.appendFile is async
//try/catch prevents crash if file not accessible
//uuid() generates unique id

module.exports = logEvents

//now create another file called index.js
//import logEvents.js
const logEvents = require("./logEvents");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();

//add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

//emit event after 2 seconds
setTimeout(() => {
    myEmitter.emit("log", "log event emitted");
}, 2000);

//explanation:
//EventEmitter is built-in event system in Node.js
//emit() → triggers an event
//on() → listens for event
//custom emitter allows asynchronous logging

//example eventlog.txt entries
20260119 14:48:31 55314503-602b-4ec2-a2df-5feb365fce7c log event emitted
20260119 14:48:34 f654f595-bb30-42c7-b39f-8d8ef4f82a4e log event emitted

//import the function from logEvents.js


const logEvents=require("./logEvents");

// node has a built in event system , used everywhere in http servers, streams,sockets,errors
// such as button click, alarm rings etc


const EventEmitter=require("events");


// creating a custom emitter means creating my own event system
//myEmitter is a personal event system that can emit and listens to events



class MyEmitter extends EventEmitter{};

//initialising object
//events do not work on classes, they work on objects


const myEmitter=new MyEmitter();

//add listener for the log event
//this means when a log event happens , run logEvents(msg)
//log is the event name
//on means listen for something 
//myEmitter.on9eventName, listenerFunction)
//passing a function and not calling a function so thats why not logEvents(msg)
 //and instead (msg)=>logEvents(msg)


myEmitter.on("log",(msg)=>logEvents(msg));

//now wait for 2 seconds and then emit
//means fire the log event and sent the message 
//EMIT means an event has happened-tell everyone who is listening 

setTimeout(()=>{
    //emit Event
    myEmitter.emit("log","log event emitted");

},2000);



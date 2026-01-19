const http=require("http");
const path=require("path");
const fs=require("fs");
const fsPromises=require("fs").promises;

const logEvents=require("./logEvents");
const EventEmitter=require("events");
class Emitter extends EventEmitter{};
const myEmitter=new Emitter();

const PORT= process.env.PORT||3500;
//3500 is default port if environment variable is not set


//creating an http server

const server=http.createServer((req,res)=>{
        console.log(req.url,req.method);

});


//start server- 
server.listen(PORT,()=>console.log("Server running on Port", PORT));


// myEmitter.on("log",(msg)=>logEvents(msg));


//     myEmitter.emit("log","log event emitted");




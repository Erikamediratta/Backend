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

const server = http.createServer((req, res) => {
        
    console.log(req.url, req.method);

    let filePath;  
    if (req.url === '/' || req.url === '/index.html') {
        res.statusCode = 200;   
        res.setHeader("Content-Type", "text/html");

        filePath = path.join(__dirname, "views", "index.html");

        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Server Error");
            } else {
                res.end(data);
            }
        });
    }
});

//start server- 
server.listen(PORT,()=>console.log("Server running on Port", PORT));


// myEmitter.on("log",(msg)=>logEvents(msg));


//     myEmitter.emit("log","log event emitted");




create a file "server.js"


Node runs on server and not in browser like js

type node in terminal , then you'll enter node repl, type .exit to exit 
Now if you have to run the server.js file,
type node server.js

now create another file math.js

create 4 functions in math.js add, subtract,multiply and divide and do module.exports={};
//this is exporting of self made functions

and import them in server.js as 
const math=require("./math");

can also be imported as

const {multiply}=require("./math");
console.log(multiply(2,3));

now create a index.js file 

fs.readFile(path, callback) reads a file asynchronously.
(err, data) is an error-first callback.
err → error if any, data → file content.
Use 'utf8' to get readable text instead of Buffer.
or data.toString(); 


after readFile() if console.log(hello), after readFile, hello would be printed first because asynchronous


//writing file


fs.writeFile(('./expressjs.md') ,"Nice to Meet you",(err)=>{
    if(err)throw err;
    console.log("Write complete");
})
//this will create an express.js file with text "Nice to meet you" 

//similarly there is a function appendFile 
//which will update an existing file

//same syntax as writeFile

File operations (write, read, rename, append) are asynchronous.
To run them in a specific order, nest the next operation inside the previous callback.
This ensures one operation finishes before the next starts.


//for example

fs.writeFile('a.txt', 'Hello', () => {
    fs.appendFile('a.txt', ' World', () => {
        fs.readFile('a.txt', 'utf8', (err, data) => {
            console.log(data);
        });
    });
});

Callbacks are nested to ensure write → append → read run in order.

//thi leads to callback hell just like js and we can avoid it using async await

//in reference to index.js(line 17-40 )
fs.promises allows async file operations (read, write, append, rename).
Use async/await to run operations in order instead of nesting callbacks.
writeFile(path, data) overwrites by default; use { flag: 'a' } to append.
Errors are caught with try/catch.



ILoveNodeJs Nice to meet you

//Now create another file stream.js

fs stands for file system and it is a built in
module that lets us read files,write files and create streams

const rs = fs.createReadStream("./nodejs.md", { encoding: "utf8" });

this creates a read stream
a stream means dont read all at once, instead peice by peice(chunks);


const ws = fs.createWriteStream("./new_stream.js");
 
 this creates a write stream, creates a file new_node.js
 and data written to ws will be saved into that file

 rs.on("data", (dataChunk) => {
    ws.write(dataChunk);
});


//rs.on("data"...) listens for the "data" event
everytime a chunk of data is read from nodejs.md , this event fires dataChunk 
ws.write(dataChunk)
writes that chunk into new_stream.js

nodejs.md  ──(read chunk by chunk)──▶  new_stream.js

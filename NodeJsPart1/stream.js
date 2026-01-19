const fs=require("fs");

const rs=fs.createReadStream("./nodejs.md", {encoding:"utf8"});

const ws=fs.createWriteStream("./new_stream.md");

rs.on("data",(dataChunk)=>{
    ws.write(dataChunk);
});
//this method is more efficient for larger files in context to index.js

rs.pipe(ws);

//rs.pipe(ws); this line is equivalent to
//  rs.on("data",(dataChunk)=>{
//     ws.write(dataChunk);
// });


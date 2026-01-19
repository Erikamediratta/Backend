const fs= require('fs');

fs.readFile(('./nodejs.md') ,(err,data)=>{
    if(err)throw err;
    console.log(data.toString());
})

console.log('Hello');

// fs.writeFile(('./expressjs.md') ,"Nice to Meet you",(err)=>{
//     if(err)throw err;
//     console.log("Write complete");
// })

//in reference to nodejs.md line 66

const fsPromises = require("fs").promises;

const fileOps = async () => {
    try {
        // Read the file
        const data = await fsPromises.readFile('./nodejs.md', 'utf8');
        console.log(data);

        // Overwrite with the same data (optional)
        await fsPromises.appendFile('./nodejs.md', "ILoveNodeJs ");


        // Overwrite with new content
        await fsPromises.appendFile('./nodejs.md', 'Nice to meet you');
        let data2=await fsPromises.readFile("./nodejs.md","utf8");
        console.log(data2);

        // Or to append instead of overwrite:
        // await fsPromises.writeFile('./nodejs.md', 'Nice to meet you', { flag: 'a' });

    } catch (error) {
        console.error(error);
    }
}

fileOps();

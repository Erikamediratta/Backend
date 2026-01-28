const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;


//Creating a basic web server using node.js


const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { };
// initialize object 
const myEmitter = new Emitter();
myEmitter.on('log', (msg, fileName) => logEvents(msg, fileName));
const PORT = process.env.PORT || 3500;

//below is a function to read a file, set correct headers and send to browser
const serveFile = async (filePath, contentType, response) => {
    try {

        const rawData = await fsPromises.readFile(
            filePath,
            !contentType.includes('image') ? 'utf8' : ''
        );
        //above is reads file from disk, if not an image, read as text(utf8)
        //if image, read as binary
        const data = contentType === 'application/json'
            ? JSON.parse(rawData) : rawData;
            //if file =json,json.parse(text) converts json string to js object
            //for ex
            //JSON.parse('{"name":"Erika","age":21}')
//becomes
//{ name: "Erika", age: 21 }

        response.writeHead(
            filePath.includes('404.html') ? 404 : 200,
            { 'Content-Type': contentType }
        );
        //above means sends http status+headers
        //{ 'Content-Type': contentType }-tells browser what kind of file is coming up


        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data
        );
        //res.end() finishes the response and sends data to browser 
        // nothing goes to browser without res.end()
        //browser expects html-text,css-text, js-text, image-binary, json-json text
        //BROWSER ALWAYS RECEIVES TEXT OR BINARY, NOT JS OBJECTS

        //Earlier we parsed json into js object
        //so JSON.stringify({ name: "Erika", age: 21 })
            //with stringify converted to
            //{"name":"Erika","age":21}



    } catch (err) {
        console.log(err);
        myEmitter.emit('log', `${err.name}: ${err.message}`, 'errLog.txt');
        //log error to errlog.txt
        response.statusCode = 500;
        response.end();
    }
}
//IF NO STATUSCODE MENTIONED, NODE ASSUMES 200,EVERYTHING OK


//CREATING THE HTTP SERVER

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
    myEmitter.emit('log', `${req.url}\t${req.method}`, 'reqLog.txt');

    const extension = path.extname(req.url);
    //above means /style.css ->.css and /about->''

    let contentType;

    //SWITCH STATEMENTS BELOW DECIDES CONTENT TYPE
    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }

let filePath;

if (contentType === 'text/html' && req.url === '/') {
    // Case 1: Home page
    filePath = path.join(__dirname, 'views', 'index.html');

} else if (contentType === 'text/html' && req.url.slice(-1) === '/') {
    // Case 2: Folder URL like /blog/
    filePath = path.join(__dirname, 'views', req.url, 'index.html');

} else if (contentType === 'text/html') {
    // Case 3: Normal page like /about
    filePath = path.join(__dirname, 'views', req.url);

} else {
    // Case 4: CSS, JS, images
    filePath = path.join(__dirname, req.url);
}


     //Above is 
//      “I want /”
// “I want /about”
// “I want /blog/”
// “I want /css/style.css”
// Your job is to go to the correct shelf and bring the right book.



    // makes .html extension not required in the browser
    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
        serveFile(filePath, contentType, res);
    } else {
        switch (path.parse(filePath).base) {
            case 'old-page.html':
                res.writeHead(301, { 'Location': '/new-page.html' });
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, { 'Location': '/' });
                res.end();
                break;
            default:
                serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
        }
    }
});
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
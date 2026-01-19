//in terminal
npm i nodemon -D
//this will install nodemon as a DEV DEPENDENCY

//in package.json replace scripts
"scripts": {
    "dev": "nodemon nodeJsPart2/index",
    "start": "node nodeJsPart2/index"
}

//npm i uuid
//install uuid package

//now in index.js
const { v4: uuid } = require("uuid");

console.log(uuid());
//uuid() generates a unique id, example output: 8d17f5fd-68f7-4103-abd3-bba8c5039302

//to install specific version
npm i uuid@8.3.2

//to check updates
npm updates

//to uninstall
npm rm nodemon -D
//uninstall removes package from dependencies, but not from scripts

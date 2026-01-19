#create a file index.js

//in terminal, write:
npm init
//answer following questions
//this will create a file package.json

//install first package
npm i date-fns
//this will create package-lock.json and node_modules

//now make a file .gitignore and add
node_modules

//now write in index.js
const { format } = require('date-fns');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

//new Date() creates a date object for current date and time
//format() from date-fns converts date into a readable string

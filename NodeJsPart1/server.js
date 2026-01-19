console.log("Hello");

//global object instead of window object
console.log(global);

//nodejs has common core modules that we will explore


//this is a method to import like os module is imported

const os=require("os");
const math= require("./math");

const {multiply}=require("./math");

console.log(os.type());
console.log(os.version());

console.log(__dirname);
//directory name
///Users/erikamediratta/Desktop/javascript

console.log(__filename);
//file name
///Users/erikamediratta/Desktop/javascript/server.js


console.log(math.add(2,3));
console.log(multiply(2,3));












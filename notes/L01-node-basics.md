


* Create a file `server.js`

* Node.js runs on the **server**, not in the browser like normal JavaScript

* To open Node REPL:

  * Type `node` in terminal
  * Type `.exit` to exit REPL

* To run a JS file:

  * `node server.js`

* Global object:

  * Browser → `window`
  * Node.js → `global`

```js
console.log("Hello");
console.log(global);
```

* Node.js has common **core modules**

### OS Module

```js
const os = require("os");

console.log(os.type());
console.log(os.version());
```

### Useful Globals

```js
console.log(__dirname);   // directory name
console.log(__filename);  // file name
```

* Node.js is a **runtime environment**
* npm is a **package manager** used to install and manage Node libraries

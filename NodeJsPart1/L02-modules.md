

* Create a file `math.js`

* Create 4 functions:

  * add
  * subtract
  * multiply
  * divide

```js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

module.exports = { add, subtract, multiply, divide };
```

* This is exporting self-made functions

### Importing in `server.js`

```js
const math = require("./math");
```

or using destructuring:

```js
const { multiply } = require("./math");
console.log(multiply(2, 3));
```

---


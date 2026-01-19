

* To avoid callback hell, use `fs.promises`

```js
const fsPromises = require("fs").promises;
```

* Allows async file operations:

  * read
  * write
  * append
  * rename

### async / await Example

```js
const fileOps = async () => {
  try {
    const data = await fsPromises.readFile('./nodejs.md', 'utf8');
    console.log(data);

    await fsPromises.appendFile('./nodejs.md', 'ILoveNodeJs ');
    await fsPromises.appendFile('./nodejs.md', 'Nice to meet you');

    const data2 = await fsPromises.readFile('./nodejs.md', 'utf8');
    console.log(data2);
  } catch (error) {
    console.error(error);
  }
};

fileOps();
```

* `writeFile` overwrites by default
* Use `{ flag: 'a' }` to append
* Errors are handled using `try/catch`


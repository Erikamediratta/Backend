

* Create `index.js`

* `fs.readFile(path, callback)` reads a file **asynchronously**

* Callback format:

  * `err` → error if any
  * `data` → file content

```js
fs.readFile(path, (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
```

* Use `'utf8'` to get readable text instead of Buffer
* Or use `data.toString()`

### Asynchronous Behavior

* If `console.log("Hello")` is written **after** `readFile`
* `Hello` prints **first** because file reading is async

```js
console.log("Hello");
```

### Writing Files

```js
fs.writeFile('./expressjs.md', 'Nice to Meet you', (err) => {
  if (err) throw err;
  console.log("Write complete");
});
```

* This creates `expressjs.md` with text "Nice to Meet you"

### appendFile

* Used to update an existing file
* Same syntax as `writeFile`

### Order of Operations

* File operations (write, read, append, rename) are **asynchronous**
* To ensure order, nest callbacks

```js
fs.writeFile('a.txt', 'Hello', () => {
  fs.appendFile('a.txt', ' World', () => {
    fs.readFile('a.txt', 'utf8', (err, data) => {
      console.log(data);
    });
  });
});
```

* This causes **callback hell**

---


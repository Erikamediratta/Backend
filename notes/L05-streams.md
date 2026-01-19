

* `fs` can also be used to create **streams**

* Stream means:

  * File is not read all at once
  * Data is read **piece by piece (chunks)**

### Read Stream

```js
const rs = fs.createReadStream('./nodejs.md', { encoding: 'utf8' });
```

### Write Stream

```js
const ws = fs.createWriteStream('./new_stream.md');
```

* Data written to `ws` is saved into `new_stream.md`

### Reading & Writing Chunks

```js
rs.on('data', (dataChunk) => {
  ws.write(dataChunk);
});
```

* `rs.on("data")` listens for chunks
* Each chunk is written into the new file

### Using pipe (more efficient)

```js
rs.pipe(ws);
```

* `pipe()` is equivalent to manual `on("data") + write`
* Better for large files

```
nodejs.md  ──(read chunk by chunk)──▶  new_stream.md
```

---

## Directory Operations (dir.js)

```js
if (!fs.existsSync('./new')) {
  fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory created');
  });
}

if (fs.existsSync('./new')) {
  fs.rmdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory removed');
  });
}
```





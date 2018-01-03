const express = require('express');
const version = require('./package.json').version;
const app = express();

app.get('/', (req, res) => res.send('Hello World! Version: '+ version));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
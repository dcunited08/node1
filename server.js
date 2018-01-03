const express = require('express');

const Config = require('./config');
const version = require('./package.json').version;

const app = express();
const config = Config.load();

app.get('/', (req, res) => res.send('Hello World! Version: ' + version + "<br /> Message: " + config.message));

app.listen(3000, () => console.log('Example app listening on port 3000! v' + version));
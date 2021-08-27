const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const portNumber = 8080;


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));
//Routes
app.use(require('./routes'));
app.listen(portNumber, () => console.log(`Listening on port ${portNumber}!`));
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/config');
var index = require('./routes/index');

app.use(bodyParser.json());
app.use('/',index);


require('./models/Encuestas');
db.sync();


app.listen(4000);
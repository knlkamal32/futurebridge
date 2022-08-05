const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const getData = require('./routes/getData');
const postData = require('./routes/postData');
const validator = require('./middleware/validator')
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', getData);
app.post('/', validator, postData);




app.listen(3001, () => console.log('App running on port 3001!'));
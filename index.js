const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('./models')
// const connect = require('./models');

// connect().then(db => {
//    console.log('DB is connected'); 

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

require('./routes/users')(app)
require('./routes/posts')(app)

app.listen(port, () => console.log(`App listening on port ${port}!`));



const express = require('express')
const path = require('path')
const api = require('./routes/TODO: INSERT ROUTE HERE');
const exp = require('constants');

const PORT = process.env.PORT || 3001;

const app = express();

// TODO: WHAT IS MY MIDDLEWARE

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);



app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);
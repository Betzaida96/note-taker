const express = require('express')
const path = require('path')
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const diagnosticsRoutes = require('./routes/diagnostics')

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use('/diagnostics', diagnosticsRoutes)

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);
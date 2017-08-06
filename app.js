const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', function() {
    console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', function(err) {
    console.log("Database error" + err);
});

const app = express();

const samples = require('./routes/samples');

app.use('/samples', samples);

// BodyParser Middleware
app.use(bodyParser.json());

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
const host = '127.0.0.1';

app.get('/', function(req, res) {
    res.send('Server works');
});

app.listen(port, host, function() {
    console.log("Server started on port " + port);
});

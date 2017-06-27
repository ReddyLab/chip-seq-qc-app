const express = require('express');
const path = require('path');
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

// BodyParser Middleware
app.use(bodyParser.json());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;

app.get('/', function(req, res, next) {
    res.send('Server works');
});

app.listen(port, function() {
    console.log("Server started on port " + port);
});

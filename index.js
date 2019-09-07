const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could not connect to database. Error: ', err);
    } else {
        console.log(config.secret);
        console.log('Connected to database: ', config.db);
    }
});

app.use(express.static(__dirname + '/Ogami/dist/Ogami'));

app.get('/', (rep, res) => {
    res.sendFile(path.join(__dirname + '/Ogami/dist/Ogami/index.html'));
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
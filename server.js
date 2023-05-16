const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Initializing app
const app = express();
app.use(express.json());
app.use(cors());

// Initializing DB
mongoose.connect('mongodb://localhost:27017/light-my-mind',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
    console.log('successfully connected to the database');
}).catch(err => {
    console.log('error connecting to the database');
    process.exit();
});

requireDir('./src/models');

// Routes
// Receives every kind of request
app.use('/api', require('./src/routes.js'));

const host = '0.0.0.0';
const port = process.env.PORT || 3010;
// Setting port
//app.listen(process.env.PORT || '0.0.0.0');
app.listen(port, host, function() {
    console.log("Server started.......");
  });

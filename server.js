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
    }
);

requireDir('./src/models');

// Routes
// Recieves every kind of request
app.use('/api', require('./src/routes.js'));

const host = '0.0.0.0';
const port = process.env.PORT || 3000;
// Setting port
//app.listen(process.env.PORT || '0.0.0.0');
app.listen(port, host, function() {
    console.log("Server started.......");
  });

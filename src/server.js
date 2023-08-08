const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Enable JSON parsing for request body
app.use(express.json());

// CORS middleware
app.use(cors());

// Import your router
const yourRouter = require('./router/router');

// Use the router with a base path
app.use('/router', yourRouter);

app.listen(8000, () => {
  console.log('Server running');
});

mongoose.connect(
  'mongodb+srv://Bulzija:12345@cluster0.ozt2hgp.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'calorietracker',
  }
);
mongoose.Promise = global.Promise;

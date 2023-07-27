const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.listen(8000, () => {
    console.log("Server running");
})

mongoose.connect('mongodb+srv://Bulzija:12345@cluster0.ozt2hgp.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'calorietracker',
});
mongoose.Promise = global.Promise;
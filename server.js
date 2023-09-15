const mongoose = require('mongoose');

const app = require('./app')

let conn = mongoose.connect(
    'mongodb+srv://Bulzija:12345@cluster0.ozt2hgp.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'calorietracker'
    }
)

const server = app.listen(4000, () => {
    console.log('Listening on port 4000')
})

module.exports = conn


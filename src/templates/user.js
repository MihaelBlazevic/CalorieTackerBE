const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create user schema and model
const userSchema = new Schema({
    name:{
        type: String,
        required:[true, 'Name is required!'],
    },
    surname:{
        type: String,
        required:[true, 'Surname is required!'],
    },
    email:{
        type: String,
        required:[true, 'Email is required!'],
        unique: [true, 'Duplicate email']
    },
    password:{
        type: String,
        required:[true, 'Password is required!']
    },
});
const User = mongoose.model('user', userSchema);

module.exports = User;
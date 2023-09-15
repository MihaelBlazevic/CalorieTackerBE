const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: [true, 'Duplicate email!'],
        lowercase: true,
        validate: [validator.isEmail, 'Email is invalid!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: 6,
        select: false
    },
})

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
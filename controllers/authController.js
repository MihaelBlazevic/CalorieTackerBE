const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../schemas/userSchema')
const { promisify } = require('util')

exports.register = async (req, res) => {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    const token = jwt.sign({id: user._id}, 'secret')
    const cookieOptions = {
        expires: new Date(
            Date.now() + 10 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    res.cookie('jwt', token, cookieOptions)

    res.status(201).json({
        token,
        user
    })
}

exports.login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return res.status(404).json({ message: 'User not found.'})
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials.'})
    }

    const token = jwt.sign({ id: user._id }, 'secret')

    res.status(200).json({
        token,
        user
    })
}

exports.authorize = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
        return next('Token not found')
    }

    const payload = await promisify(jwt.verify)(token, 'secret')

    const user = await User.findById(payload.id)

    if (!user) {
        return next(new Error('User not found'))
    }

    req.user = user
    next()
}
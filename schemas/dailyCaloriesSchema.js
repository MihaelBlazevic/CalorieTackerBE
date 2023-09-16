const mongoose = require('mongoose')

const dailyCaloriesSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    recipes: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Recipe',
        }
    ],
    dailyCalories: {
        type: Number,
        required: true
    }
})

dailyCaloriesSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'user',
    }).populate({
        path: 'recipes'
    })
    next()
})

const DailyCalories = mongoose.model('DailyCalories', dailyCaloriesSchema)

module.exports = DailyCalories
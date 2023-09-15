const mongoose = require('mongoose')

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    kcal: {
        type: Number,
        required: [true, 'Calories are required!']
    }
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

module.exports = Ingredient
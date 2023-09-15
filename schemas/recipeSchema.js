const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Ingredient',
    }
  ],
})

recipeSchema.pre(/^find/, function (next) {
  this.populate({
    path: "ingredients",
  })
  next()
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
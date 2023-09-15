const Ingredient = require("../schemas/ingredientSchema")

exports.getIngredients = async (req, res) => {
    const ingredients = await Ingredient.find()
    res.status(200).json(ingredients)
}

exports.createIngredient = async (req, res) => {
    const newIngredient = {
        name: req.body.name,
        kcal: req.body.kcal
    }

    const ingredient = await Ingredient.create(newIngredient)

    res.status(201).json(ingredient)
}
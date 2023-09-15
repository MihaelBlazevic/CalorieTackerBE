const Recipe = require("../schemas/recipeSchema")

exports.getRecipes = async (req, res) => {
    const recipes = await Recipe.find()
    res.status(200).json(recipes)
}

exports.createRecipe = async (req, res) => {
    const newRecipe = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        totalKcal: req.body.totalKcal
    }

    const recipe = await Recipe.create(newRecipe)

    res.status(201).json(recipe)
}
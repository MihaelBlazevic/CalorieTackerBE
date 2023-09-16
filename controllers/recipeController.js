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
exports.deleteRecipe = async (req, res) => {
    console.log("Delete request received for ID:", req.params.id);
    try {
        await Recipe.findByIdAndDelete(req.params._id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

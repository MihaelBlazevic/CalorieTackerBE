const express = require('express')
const authController = require('../controllers/authController')
const recipeController = require('../controllers/recipeController')

const router = express.Router();

router.route('/')
    .get(authController.authorize, recipeController.getRecipes)
    .post(authController.authorize, recipeController.createRecipe)

module.exports = router
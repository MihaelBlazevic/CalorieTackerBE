const express = require('express')
const authController = require('../controllers/authController')
const ingredientController = require('../controllers/ingredientController')

const router = express.Router();

router.route('/')
    .get(authController.authorize, ingredientController.getIngredients)
    .post(authController.authorize, ingredientController.createIngredient)

module.exports = router
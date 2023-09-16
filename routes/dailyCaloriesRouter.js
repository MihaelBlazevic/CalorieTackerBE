const express = require('express')
const authController = require('../controllers/authController')
const dailyCaloriesController = require('../controllers/dailyCaloriesController')

const router = express.Router();

router.route('/:id')
    .get(authController.authorize, dailyCaloriesController.getDailyCalories)

router.route('/')
    .post(authController.authorize, dailyCaloriesController.createDailyCalories)

module.exports = router
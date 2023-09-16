const express = require('express')
const authController = require('../controllers/authController')
const dailyCaloriesController = require('../controllers/dailyCaloriesController')

const router = express.Router();

router.route('/')
    .get(authController.authorize, dailyCaloriesController.getDailyCalories)
    .post(authController.authorize, dailyCaloriesController.createDailyCalories)

module.exports = router
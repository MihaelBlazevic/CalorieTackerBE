const cors = require('cors')
const express = require('express')
const authRouter = require('./routes/authRouter')
const ingredientRouter = require('./routes/ingredientRouter')
const recipeRouter = require('./routes/recipeRouter')
const dailyCaloriesRouter = require('./routes/dailyCaloriesRouter')

const app = express()

app.use(cors())
app.options('*', cors())
app.use(express.json())

app.use('/', authRouter)
app.use('/ingredients', ingredientRouter)
app.use('/recipes', recipeRouter)
app.use('/dailycalories', dailyCaloriesRouter)

module.exports = app
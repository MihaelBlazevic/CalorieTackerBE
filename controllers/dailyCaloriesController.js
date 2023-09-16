const DailyCalories = require("../schemas/dailyCaloriesSchema")

exports.getDailyCalories = async (req, res) => {
    const start = new Date()
    start.setHours(0, 0, 0, 0)
    const end = new Date()
    end.setHours(23, 59, 59, 999)

    const dailyCalories = await DailyCalories.findOne({
        date: {
            $gte: start,
            $lt: end
        },
        user: req.body.user
    })

    res.status(200).json(dailyCalories)
}

exports.createDailyCalories = async (req, res) => {
    const start = new Date()
    start.setHours(0, 0, 0, 0)
    const end = new Date()
    end.setHours(23, 59, 59, 999)

    const dailyCalories = await DailyCalories.findOne({
        date: {
            $gte: start,
            $lt: end
        },
        user: req.body.user
    })

    if (!dailyCalories) {
        const newDailyCalories = {
            user: req.body.user,
            recipes: req.body.recipes,
            dailyCalories: req.body.dailyCalories
        }

        const dailyCalories = await DailyCalories.create(newDailyCalories)

        res.status(201).json(dailyCalories)
    } else {
        dailyCalories['recipes'].push(req.body.recipes)
        dailyCalories['dailyCalories'] += req.body.dailyCalories
        await DailyCalories.replaceOne({ _id: dailyCalories._id }, dailyCalories)

        const updatedDailyCalories = await DailyCalories.findOne({
            date: {
                $gte: start,
                $lt: end
            },
            user: req.body.user
        })

        res.status(200).json(updatedDailyCalories)
    }
}
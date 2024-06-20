const express = require("express")

const peopleRoute = require("./people.routes")
const eventRoute = require("./event.routes")
const productRoute = require("./product.routes")
const recipeRoute = require("./recipe.routes")
const restaurantRoute = require("./restaurant.routes")
const userRoute = require("./user.routes")
const jwtRoute = require("./jwt.routes")
const bcryptRoute = require("./bcrypt.routes")
const emailRoute = require("./email.routes")


const router = express.Router()


router.use("/people",peopleRoute)
router.use("/event",eventRoute)
router.use("/product",productRoute)
router.use("/recipe",recipeRoute)
router.use("/restaurant",restaurantRoute)
router.use("/user",userRoute)
router.use("/jwt",jwtRoute)
router.use("/bcrypt",bcryptRoute)
router.use("/email",emailRoute)

module.exports = router
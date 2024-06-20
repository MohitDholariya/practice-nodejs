const express = require("express")
const { restautant_Controller } = require("../Controller")

const router = express.Router()

router.post(
    "/create-restaurant",
    restautant_Controller.create_restaurant
)

router.get(
    "/list-restaurant",
    restautant_Controller.get_restaurant_list
)

router.put(
    "/update-restaurant/:restaurantid",
    restautant_Controller.update_restaurant
)

router.delete(
    "/delete-restaurant/:restaurantid",
    restautant_Controller.delete_restaurant
)

module.exports = router
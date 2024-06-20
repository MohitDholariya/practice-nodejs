const express = require("express")
const { recipe_Controller } = require("../Controller")

const router = express.Router()

router.post(
    "/create-recipe",
    recipe_Controller.create_recipe
)

router.get(
    "/list-recipe",
    recipe_Controller.get_recipe_list
)

router.put(
    "/update-recipe/:recipeid",
    recipe_Controller.update_recipe
)

router.delete(
    "/delete-recipe/:recipeid",
    recipe_Controller.delete_recipe
)

module.exports = router
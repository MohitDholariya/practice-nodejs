const { recipe_Service } = require("../Services")

const create_recipe = async (req, res) => {
    try {
        const reqbody = req.body
        const new_recipe = await recipe_Service.create_recipe(reqbody)
        if (!new_recipe) {
            throw new Error("Something went wrong !!!")
        }
        res.status(200).json({
            success: true,
            DATA: new_recipe
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const get_recipe_list = async (req, res) => {
    try {
        const recipelist = await recipe_Service.recipe_list_service()
        if (!recipelist) {
            throw new Error("Recipe list did not show !!!")
        }
        res.status(200).json({
            success: true,
            DATA: recipelist
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const update_recipe = async (req, res) => {
    try {
        const reqbody = req.body
        const recipe_id = req.params.recipeid

        // Method 1
        const update_result = await recipe_Service.recipe_update_service(recipe_id, reqbody)

        // Method 2
        const update_data = await recipe_Service.find_recipe_by_id(recipe_id)

        if (!update_result) {
            throw new error("recipe unable to update !!!")
        }
        res.status(200).json({
            success: true,
            message: "recipe update successfully",
            // Method 1
            // DATA: reqbody
            // Method 2  
            DATA: update_data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const delete_recipe = async (req, res) => {
    const recipe_id = req.params.recipeid
    const delete_result = await recipe_Service.recipe_delete_service(recipe_id)
    console.log("======================")
    console.log(delete_result)
    console.log("======================")

    try {
        if (!recipe_id) {
            throw new Error("Recipe unable to delete -!-")
        }
        res.status(200).json({
            success: true,
            message: "Recipe Deleted successfully !!!"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_recipe,
    get_recipe_list,
    update_recipe,
    delete_recipe
}
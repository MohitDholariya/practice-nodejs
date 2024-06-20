const { Recipe } = require("../Model")

const create_recipe = (data) => {
    return Recipe.create(data)
}

const recipe_list_service = () => {
    return Recipe.find()
}

const recipe_update_service = (id,data) => {
    return Recipe.findByIdAndUpdate(id, { $set: data})
}

// Method 2 update
const find_recipe_by_id = (id) => {
    return Recipe.findById(id)
}

const recipe_delete_service = (id) => {
    return Recipe.findByIdAndDelete(id)
}

module.exports = {
    create_recipe,
    recipe_list_service,
    recipe_update_service,
    find_recipe_by_id,
    recipe_delete_service
}
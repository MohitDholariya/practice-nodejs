const { Restaurant } = require("../Model")

const create_restaurant = (data) => {
    return Restaurant.create(data)
}

const restaurant_list_service = () => {
    return Restaurant.find()
}

const restaurant_update_service = (id,data) => {
    return Restaurant.findByIdAndUpdate(id, { $set: data})
}

// Method 2 update
const find_restaurant_by_id = (id) => {
    return Restaurant.findById(id)
}

const restaurant_delete_service = (id) => {
    return Restaurant.findByIdAndDelete(id)
}

module.exports = {
    create_restaurant,
    restaurant_list_service,
    restaurant_update_service,
    find_restaurant_by_id,
    restaurant_delete_service
}
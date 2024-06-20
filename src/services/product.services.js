const { Product } = require("../Model")
const { populate } = require("../Model/people.model")


const create_product = (data) => {
    return Product.create(data)
}

const product_list_service = async() => {

    // Single Populate :- 
    // return Product.find().populate("people")

    // Multiple Populate :- 
    // return Product.find().populate("people").populate("event").populate("recipe").populate("restaurant")

    // Specific populate :- 
    return Product.find().populate("people",{first_name: 1}).populate("event",{event_title: true,event_location: 1}).populate("recipe",{recipe_name: 1}).populate("restaurant",{restaurant_name: true})
} 

// Method 1 update
const product_update_service = (id,data) => {
    return Product.findByIdAndUpdate(id, { $set: data})
}

// Method 2 update
const find_product_by_id = (id) => {
    return Product.findById(id)
}

const product_delete_service = (id) => {
    return Product.findByIdAndDelete(id)
}

module.exports = {
    create_product,
    product_list_service,
    product_update_service,
    find_product_by_id,
    product_delete_service
}
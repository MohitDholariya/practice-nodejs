const { restaurant_Service } = require("../Services")

const create_restaurant = async (req, res) => {
    try {
        const reqbody = req.body
        const new_restaurant = await restaurant_Service.create_restaurant(reqbody)
        if (!new_restaurant) {
            throw new Error("Something went wrong !!!")
        }
        res.status(200).json({
            success: true,
            DATA: new_restaurant
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const get_restaurant_list = async (req, res) => {
    try {
        const restaurantlist = await restaurant_Service.restaurant_list_service()
        if (!restaurantlist) {
            throw new Error("Restaurant list did not show !!!")
        }
        res.status(200).json({
            success: true,
            DATA: restaurantlist
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const update_restaurant = async (req, res) => {
    try {
        const reqbody = req.body
        const restaurant_id = req.params.restaurantid

        // Method 1
        const update_result = await restaurant_Service.restaurant_update_service(restaurant_id, reqbody)

        // Method 2
        const update_data = await restaurant_Service.find_restaurant_by_id(restaurant_id)

        if (!update_result) {
            throw new error("restaurant unable to update !!!")
        }
        res.status(200).json({
            success: true,
            message: "restaurant update successfully",
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

const delete_restaurant = async (req, res) => {
    const restaurant_id = req.params.restaurantid
    const delete_result = await restaurant_Service.restaurant_delete_service(restaurant_id)
    console.log("======================")
    console.log(delete_result)
    console.log("======================")

    try {
        if (!restaurant_id) {
            throw new Error("Restaurant unable to delete -!- ")
        }
        res.status(200).json({
            success: true,
            message: "Restaurant Deleted successfully !!!"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_restaurant,
    get_restaurant_list,
    update_restaurant,
    delete_restaurant
}
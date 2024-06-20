const { product_Service } = require("../Services")



const create_product = async(req,res) => {
    try {
        const reqbody = req.body
        const new_product = await product_Service.create_product(reqbody)
        if(!new_product){
            throw new Error("Something went Wrong !!!")
        }
        res.status(200).json({
            success: true,
            DATA: new_product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const get_product_list = async(req,res) => {
    try {
        const productlist = await product_Service.product_list_service()
        if(!productlist){
            throw new Error("Product list did not show !!!")
        }
        res.status(200).json({
            success: true,
            DATA: productlist
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const update_product = async (req, res) => {
    try {
        const reqbody = req.body
        const product_id = req.params.productid

        // Method 1
        const update_result = await product_Service.product_update_service(product_id, reqbody)

        // Method 2
        const update_data = await product_Service.find_product_by_id(product_id)

        if (!update_result) {
            throw new error("product unable to update !!!")
        }
        res.status(200).json({
            success: true,
            message: "product update successfully",
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

const delete_product = async(req,res) => {
    try {
        const product_id = req.params.productid
        const delete_result = await product_Service.product_delete_service(product_id)
        console.log("======================")
        console.log(delete_result)
        console.log("======================")
        
        if(!product_id){
            throw new Error("Product unable to delete -!-")
        }
        res.status(200).json({
            success: true,
            message: "Product Deleted successfully !!!"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_product,
    get_product_list,
    update_product,
    delete_product
}
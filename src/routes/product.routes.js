const express = require("express")
const { product_Controller } = require("../Controller")

const router = express.Router()

router.post(
    "/create-product",
    product_Controller.create_product
)

router.get(
    "/list-product",
    product_Controller.get_product_list
)

router.put(
    "/update-product/:productid",
    product_Controller.update_product
)

router.delete(
    "/delete-product/:productid",
    product_Controller.delete_product
)

module.exports = router
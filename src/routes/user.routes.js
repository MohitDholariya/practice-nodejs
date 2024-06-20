const express = require("express")
const { user_Controller } = require("../Controller")
const { user_Validation } = require("../validation")

const router = express.Router()

router.post(
    "/create-user",
    user_Validation.create_user,
    user_Controller.create_user
)

module.exports = router
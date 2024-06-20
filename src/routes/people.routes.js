const express = require("express")
const { people_Controller } = require("../Controller")

const router = express.Router()

// 1. CREATE ROUTES
router.post(
    "/create-people",
    // call-back (controller)
    people_Controller.create_people
)


// 2. READ / LIST ROUTES
router.get(
    "/list-people",
    // call-back (controller)
    people_Controller.get_people_list
)


// 3. UPDATE ROUTES
router.put(
    "/update-people/:peopleid",
    // call-back (controller)
    people_Controller.update_people
)


// 4. DELETE ROUTES
router.delete(
    "/delete-people/:peopleid",
    // call-back (controller)
    people_Controller.delete_people
)


// Extra : Ek sathe all data delete karva
router.delete(
    "/delete-people-collection",
    // call-back (controller)
    people_Controller.delete_people_collection
)


// Using get method also delete the data
router.get(
    "/delete-people-collection",
    // call-back (controller)
    people_Controller.delete_people_collection
)


module.exports = router
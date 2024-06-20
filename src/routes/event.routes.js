const express = require("express")
const { event_Controller } = require("../Controller")

const router = express.Router()

router.post(
    "/create-event",
    event_Controller.create_event
)

router.get(
    "/list-event",
    event_Controller.get_event_list
)

router.put(
    "/update-event/:eventid",
    event_Controller.update_event
)

router.delete(
    "/delete-event/:eventid",
    event_Controller.delete_event
)

module.exports = router
const { event_Service } = require("../Services")

const create_event = async(req,res) => {
    try {
        const reqbody = req.body
        const new_event = await event_Service.create_event(reqbody)
        if(!new_event){
            throw new Error("Something went wrong !!!")
        }
        res.status(200).json({
            success: true,
            DATA: new_event
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const get_event_list = async(req,res) => {
    try {
        const eventlist = await event_Service.event_list_service()
        if(!eventlist){
            throw new Error("Event list did not show !!!")
        }
        res.status(200).json({
            success: true,
            DATA: eventlist
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const update_event = async(req, res) => {
    try {
        const reqbody = req.body
        const event_id = req.params.eventid

        // Method 1
        const update_result = await event_Service.event_update_service(event_id, reqbody)

        // Method 2
        const update_data = await event_Service.find_event_by_id(event_id)
f
        if (!update_result) {
            throw new error("event unable to update !!!")
        }
        res.status(200).json({
            success: true,
            message: "event update successfully",
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

const delete_event = async(req,res) => {
    try {
        const event_id = req.params.eventid
        const delete_result = await event_Service.event_delete_service(event_id)
        console.log("======================")
        console.log(delete_result)
        console.log("======================")

        if(!delete_result){
            throw new Error("Event unable to delete -!-")
        }
        res.status(200).json({
            success: true,
            message: "Event Deleted successfully !!!"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_event,
    get_event_list,
    update_event,
    delete_event
}
const { json } = require("express")
const { people_Service } = require("../Services")
const { people_list_service } = require("../Services/people.services")


// 1. CREATE CONTROLLER
const create_people = async (req, res) => {
    try {
        // reqbody  
        // console.log(req);
        const reqbody = req.body

        // service code check for old data
        const people_exist = await people_Service.get_people_by_name(reqbody.people_name)
        console.log(people_exist)
        if(people_exist){
            throw new Error("People by this name already exist in database not repeat again -!-")
        }

        // send reqbody to database || Awaited services
        // result
        const new_people = await people_Service.create_people(reqbody)

        // result verify
        if (!new_people) {
            throw new Error("Something went wrong !!!")
        }
        // response according to result
        res.status(200).json({
            success: true,
            DATA: new_people
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


// 2. READ / LIST CONTROLLER
const get_people_list = async (req, res) => {
    try {
        // list <= (database)
        const peoplelist = await people_Service.people_list_service()
        if (!peoplelist) {
            throw new Error("people list did not show !!!")
        }
        // response according to result
        res.status(200).json({
            success: true,
            DATA: peoplelist
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


// 3. UPDATE CONTROLLER
const update_people = async (req, res) => {
    try {
        const reqbody = req.body
        const people_id = req.params.peopleid

        // Method 1
        const update_result = await people_Service.people_update_service(people_id, reqbody)

        // Method 2
        const update_data = await people_Service.find_people_by_id(people_id)

        if (!update_result) {
            throw new error("People unable to update !!!")
        }
        res.status(200).json({
            success: true,
            message: "People update successfully",
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


// 4. DELETE CONTROLLER
const delete_people = async (req, res) => {
    try {
        const people_id = req.params.peopleid
        // Service awaited
        const delete_result = await people_Service.people_delete_service(people_id)
        console.log("======================")
        console.log(delete_result)
        console.log("======================")

        if (!delete_result) {
            throw new Error("People unable to delete!!!")
        }
        res.status(200).json({
            success: true,
            message: "People Deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


// Extra : Ek sathe all data delete karva
const delete_people_collection = async (req, res) => {
    try {
        // Service awaited
        const delete_result = await people_Service.delete_people_collection_service()
        if (!delete_result) {
            throw new Error("People unable to delete !!!")
        }
        res.status(200).json({
            success: true,
            message: "People Collection deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_people,
    get_people_list,
    delete_people,
    delete_people_collection,
    update_people
}
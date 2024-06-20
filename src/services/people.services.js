const { People } = require("../Model")

// 1. CREATE SERVICE
const create_people = (data) => {
    return People.create(data)
}

// ** not repeat product in database
const get_people_by_name = (people_name) => {
    return People.findOne({people_name})
}


// 2. READ / LIST SERVICE
const people_list_service = () => {
    return People.find()
}


// 3. UPDATE SERVICE
const people_update_service = (id,data) => {
    return People.findByIdAndUpdate(id, { $set: data})
}

// Method 2 update
const find_people_by_id = (id) => {
    return People.findById(id)
}


// 4. DELETE SERVICE
const people_delete_service = (id) => {
    return People.findByIdAndDelete(id)
}

// Extra : Ek sathe all data delete karva
const delete_people_collection_service = () => {
    return People.deleteMany()
}


module.exports = {
    create_people,
    get_people_by_name,
    people_list_service,
    people_update_service,
    find_people_by_id,
    people_delete_service,
    delete_people_collection_service
}

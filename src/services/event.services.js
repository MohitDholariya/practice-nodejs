const { Event } = require("../Model")

const create_event = (data) => {
    return Event.create(data)
}

const event_list_service = () => {
    return Event.find()
}

const event_update_service = (id,data) => {
    return Event.findByIdAndUpdate(id, { $set: data})
}

// Method 2 update
const find_event_by_id = (id) => {
    return Event.findById(id)
}

const event_delete_service = (id) => {
    return Event.findByIdAndDelete(id)
}

module.exports = { 
    create_event,
    event_list_service,
    event_update_service,
    find_event_by_id,
    event_delete_service
}

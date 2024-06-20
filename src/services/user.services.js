const { User } = require("../Model")

const create_user = (data) => {
    return User.create(data)
}

const user_list_service = () => {
    return User.find()
}

const user_update_service = (id,data) => {
    return User.findByIdAndUpdate(id, { $set: data})
}

// Method 2 update
const find_user_by_id = (id) => {
    return User.findById(id)
}

const user_delete_service = (id) => {
    return User.findByIdAndDelete(id)
}

module.exports = { 
    create_user,
    user_list_service,
    user_update_service,
    find_user_by_id,
    user_delete_service
}

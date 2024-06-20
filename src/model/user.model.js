const { default: mongoose } = require("mongoose");

const user_Schema = new mongoose.Schema({
    user_name:{
        type: String,
        trim: true
    },
    password:{
        type: String,
        trim: true
    },
    confirm_password:{
        type: String,
        trim: true
    }
},{
    timestamps: true,
    versionKey: false
})

const user = mongoose.model("User",user_Schema)
module.exports = user

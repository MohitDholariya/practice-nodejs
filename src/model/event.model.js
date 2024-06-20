const { default: mongoose } = require("mongoose");

const event_Schema = new mongoose.Schema({
    event_title:{
        type: String,
        trim: true
    },
    event_description:{
        type: String,
        trim: true
    },
    event_price:{
        type: String,
        default: 100
    },
    event_location:{
        type: String,
        trim: true
    }
},{
    timestamps: true,
    versionKey: false
})

const event = mongoose.model("Event",event_Schema)
module.exports = event
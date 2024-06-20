const { default: mongoose } = require("mongoose");

const restaurant_Schema = new mongoose.Schema({
    restaurant_name:{
        type: String,
        trim: true
    },
    restaurant_address:{
        type: String,
        trim: true
    },
    restaurant_cno:{
        type: Number,
        default: 100 
    },
    restaurant_details:{
        type: String,
        trim: true
    }
},{
    timestamps: true,
    versionKey: false 
})

const restaurant = mongoose.model("Restaurant",restaurant_Schema)
module.exports = restaurant

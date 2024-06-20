const { default: mongoose } = require("mongoose");

const product_Schema = new mongoose.Schema({
    product_name:{
        type: String,
        trim: true
    },
    product_description:{
        type: String,
        trim: true
    },
    product_price:{
        type: Number,
        default: 100 
    },
    product_quantity:{
        type: Number,
        default: 0 
    },
    people:{
        type: mongoose.Types.ObjectId,
        ref : "People"
    },
    event:{
        type: mongoose.Types.ObjectId,
        ref: "Event"
    },
    recipe:{
        type: mongoose.Types.ObjectId,
        ref: "Recipe"
    },
    restaurant:{
        type: mongoose.Types.ObjectId,
        ref: "Restaurant"
    }
},{
    timestamps: true,
    versionKey: false
})

const product = mongoose.model("Product",product_Schema)
module.exports = product
const { default: mongoose } = require("mongoose")

const connectDB = () => {
    mongoose.connect("mongodb+srv://mohitdholariya50:Mohit6779@cluster0.akpscy9.mongodb.net/practicedbstore")
    .then(()=>{
        console.log("Database connection connect successfully on terminal");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDB;

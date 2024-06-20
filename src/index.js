// console.log("This is main index.js of src"); 

const express = require("express");
const connectDB = require("./db/dbconnection");
const router = require("./routes");


// app config
const app = express()

app.listen(5500, () => {
    console.log("server is on in terminal");
})


// middleware
app.use(express.json())
 

// from DB folder Dbconnection 
connectDB()


app.post(
    "/testing",
    // call_back
    // ()=>{console.log("Route got hitted")}
    (req, res) => {
        const body = req.body
        res.status(200).json({
            success: true,
            data: body
        })
    }
)

app.use("/v1", router)
// index => routes || routes > index.js 

app.use(() => {
    throw new Error("route not found");
})










// testing1
// app.get("/testing1",()=>{
//     console.log("route got hitted testing1");



// using get method
// testing1
// app.get("/testing1",(req,res)=>{
//     res.status(200).json({
//         success: true,
//         message: "you hit testing route 1"
//     })
// })



// using post method
// testing1
// app.post("/testing1",(req,res)=>{
//     const reqbody = req.body
//     console.log(reqbody)
//     res.status(200).json({
//         success: true,
//         data: reqbody
//     })












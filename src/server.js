// const http = require("http")
// Http.createserver(() => {
// })


const express = require("express")


// app config
const app = express()
const port = 5500;         //8080



app.listen(port,
    () => {
        setInterval(() => {
            console.log("server is running " + port);
        }, 1000)
    })

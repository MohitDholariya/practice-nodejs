const express = require("express")
const jwt = require("jsonwebtoken")

const router = express.Router()


// Post Method : 
router.post(
    "/create-token",
    async(req,res) => {
        try {
            const reqbody = req.body
            const secret_key = "rgkfsvbckzbfsjgjbdgbcjkbkxbc"

            // 1 Method
            // const token = jwt.sign(reqbody,"rgkfsvbckzbfsjgjbdgbcjkbkxbc")

            // 2 Method
            const token = jwt.sign(reqbody,secret_key)

            if(!token){
                throw new Error("token is wrong !!! ") 
            }
            res.status(200).json({
                success: true,
                Data: token
            })
        } catch (error) {
            res.status(401).json({
                success: false,
                message: error.message
            })
        }
    }
)

// Get Method : 
router.get(         // post
    "/decode-token",
    async(req, res) => {
        try {
            const token = req.body.token
            const secret_key = "rgkfsvbckzbfsjgjbdgbcjkbkxbc"

            const decoded = jwt.verify(reqbody,secret_key)

            if(!decoded){
                throw new Error("decoded is wrong !!! ") 
            }
            res.status(200).json({
                success: true,
                Data: decoded
            })
        } catch (error) {
            res.status(401).json({
                success: false,
                message: error.message
            })
        }
    }
)

module.exports = router
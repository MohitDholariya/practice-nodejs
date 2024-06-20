const express = require("express")
const bcrypt = require("bcrypt")

const router = express.Router()


// HASH METHOD :-
router.post(
    "/hashing-password",
    async(req,res) => {
        try {
            const password = req.body.password
            // console.log(password);
            const bcrypt_token = await bcrypt.hash(password,12)

            if(!bcrypt_token){
                throw new Error("bcrypt failed")
            }
            res.status(200).json({
                success: true,
                encrypted_hash : bcrypt_token
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    } 
)


// COMPARE METHOD :-
router.post(
    "/checking-password",
    async(req, res) => {
        try {
            const bcrypt_token = await bcrypt.hash(password, 12)
            const trail_password = req.body.password
            const result = await bcrypt.compare(trail_password,bcrypt_token)

            if(!result){
                throw new Error("password || credential wrong")
            }
            res.status(200).json({
                success: true,
                log_in: "success",
                password: trail_password
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    } 
)


module.exports = router
const { user_Service } = require("../Services")


const create_user = async(req, res) => {
    try {

        
        const password_to_be_send = await bcrypt.hash(req.body.password, 16)
        req.body.password = password_to_be_send

        if (!password_to_be_send) {
            throw new Error("BCRYPT ERROR")
        }

        const new_user = user_Service.create_user(req.body)
        
        if (!new_user) {
            throw new Error("Something wrong")
        }

        res.status(200).json({
            success: true,
            data: req.body.user_name
        })    
    
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error.message
        }) 
    }
}    

module.exports = {
    create_user
}
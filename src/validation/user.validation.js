const Joi = require("joi");

const create_user = (req,res,next) => {
    try {
        const ideal_object = Joi.object({
            user_name: Joi.string().required().trim(),
            password: Joi.string().required().trim(),
            confirm_password: Joi.ref("password")
        })

        // Method 1 : 
        // const ideal_object = Joi.object().keys({ })

        // Method 2 : 
        const result = ideal_object.validate(req.body)
        if(result.error){
            // console.log(result.error.details[0].message);
            throw new Error("validation failed !!!")
        }else{
            next()
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
  create_user
};

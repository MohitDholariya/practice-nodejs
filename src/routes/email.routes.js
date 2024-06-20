const express = require("express")
const nodemailer = require("nodemailer")
const ejs = require("ejs")
const path = require("path");
const router = express.Router()


const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "mohitdholariya50@gmail.com",
        pass: "zhrtlnqhaitqzuyy" // google account mathi male
    }
})

router.post(
    "/sendmail",
    // "/sendmail/:maillll",    // for 3 method
    async(req,res) => {
        try {

            // First Method Direct :- 
            const sent_mail = await transport.sendMail({
                from: "mohitdholariya50@gmail.com",
                to: "mdpatel9776@gmail.com",
                subject: "NODE-MAILER",
                text: "nodemailer is working properly...."
            })


            // Second Method req.body :-
            // const send_to_person = req.body.email
            // const sent_mail = await transport.sendMail({
            //     from: "mohitdholariya50@gmail.com",
            //     to: send_to_person,
            //     subject: "NODE-MAILER",
            //     text: "Second method through reqbody nodemailer is working properly...."
            // })


            // Third Method req.params :-
            // const send_to_person = req.params.maillll
            // const sent_mail = await transport.sendMail({
            //     from: "mohitdholariya50@gmail.com",
            //     to: send_to_person,
            //     subject: "NODE-MAILER",
            //     text: "Third method through reqparams nodemailer is working properly...."
            // })

            if(!sent_mail){
                throw new Error("mail is not send !!!")
            }


            // EJS Syntax :-  
            // EJS ni file view folder ma html code :- 
            ejs.renderFile(
                path.join(__dirname,"../views/email.ejs"),
                {
                    name: "mohit",
                    position: "senior manager",
                    companyName: "infotech developer",
                    salary: "$20000",
                    startDate: "26 December",
                    yourName: "MD Patel",
                    yourPosition: "Company CEO"
                },
                async(err,data) => {
                    if(err){
                        throw new Error("EJS is not rendered well !!!")
                    }
                    const sent_mail = await transport.sendMail({
                        from: "mohitdholariya50@gmail.com",
                        to: "harshalpatel7100@gmail.com",
                        subject: "Testing backend ejs",
                        html: data
                    })
                    if(!sent_mail){
                        throw new Error("Mail is not sent !!!")
                    }
                    res.status(200).json({
                        success: true,
                        message: "check your mail"
                    })
                }
            )

            // res.status(200).json({
            //     success: true,
            //     message: "check your mail"
            // })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }
)

module.exports = router
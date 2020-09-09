const nodemailer = require('nodemailer');
const dotenv=require("dotenv");
dotenv.config();
async function sendMail(data,ReceiverMail)
{   
    return new Promise((resolve,reject)=>
    {
        console.log(data);
    console.log(ReceiverMail)
            var transport =nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user:process.env.SENDER_MAIL,
                    pass:process.env.SENDER_PASSWORD
                }
            });

            const message ={
                from:process.env.SENDER_MAIL,
                to: String(ReceiverMail),
                subject: 'Otp for phonebook',
                text: String(data)
            };
            
            
        const value= transport.sendMail(message, function (err, info) {
            if (err) {
                console.log(err);
                resolve(false)

            }
            else {
                console.log("Mail sent");
                resolve(true)

            }
        });
           
            
})
}

module.exports={sendMail}



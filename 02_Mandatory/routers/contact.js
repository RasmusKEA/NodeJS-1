const router = require("express").Router();
const nodemailer  = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "nodefolio@outlook.dk",
        pass: "rasmus98"
    }
});



router.post("/api/contact", (req, res) => {
    console.log(req.body);

    const options = {
        from: "nodefolio@outlook.dk", 
        to: [`${req.body.email}`, "nodefolio@outlook.dk"],
        subject: `${req.body.subject}`,
        text: `${req.body.message}`
    }

    transporter.sendMail(options, function(err, info){
        if(err){
            console.log(err)
            return;
        }
        console.log("Sent: " + info.response)
    })

    res.send("Mail has been sent");
});

module.exports = {
    router
};
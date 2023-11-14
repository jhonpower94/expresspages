const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
var cors = require("cors");
router.use(cors());
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.route("/").post((req, res) => {
  const { message, to, subject } = req.body;
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "unchainedtrade@outlook.com", // generated ethereal user
        pass: "unchtrad@2022", // generated ethereal password
      },
      tls: {
        // rejectUnAuthorized: false,
        ciphers: "SSLv3",
      },
    });

    const sitename = "Unchainedtrade";
    const imagelogo =
      "https://firebasestorage.googleapis.com/v0/b/cointradecenter-ad3f5.appspot.com/o/emailogo%2Func.png?alt=media&token=b7951504-1e37-41dc-b23b-fd5aa4d36f75"; // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"unchainedtrade" <unchainedtrade@outlook.com>', // sender address
      to: to, // list of receivers
      subject: `${subject} / ${sitename} ✔`, // Subject line
      // text: "Hello world?", // plain text body
      html: `${message}`,
    });

    return info;
    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main()
    .then((info) => res.send(`${info.messageId}`))
    .catch((error) => {
      // res.send(error);
      console.log(error);
    });

  res.send("working");
});

module.exports = router;

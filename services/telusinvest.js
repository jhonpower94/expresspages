const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
var cors = require("cors");
router.use(cors());
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

const { user, pass } = require("../config2");

router.route("/").post((req, res) => {
  const { message, to, subject } = req.body;
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const sitename = "Telus Investment";
    const imagelogo =
      "https://firebasestorage.googleapis.com/v0/b/telusinvestment.appspot.com/o/logowhite.png?alt=media&token=c9e938cc-8134-4468-a405-f2fe6732a488&_gl=1*vrxzia*_ga*ODM5MTQ3Mzg5LjE1OTkzNzk0NTI.*_ga_CW55HF8NVT*MTY5NzA1NjQwNC4xMTUuMS4xNjk3MDU4OTU4LjI4LjAuMA.."; // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Telus Investment" <${user}>`, // sender address
      to: to, // list of receivers
      subject: `${subject} / ${sitename} ✔`, // Subject line
      // text: "Hello world?", // plain text body
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html> <head> <meta charset="utf-8" /> <style> .ExternalClass { width: 100%; } /* Forces Outlook.com to display emails at full width */ .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; } /* Forces Outlook.com to display normal line spacing, here is more on that: http://www.emailonacid.com/forum/viewthread/43/ */ .imageFix { display: block; } a { text-decoration: none; } @media screen and (max-width: 600px) { table.row th.col-lg-1, table.row th.col-lg-2, table.row th.col-lg-3, table.row th.col-lg-4, table.row th.col-lg-5, table.row th.col-lg-6, table.row th.col-lg-7, table.row th.col-lg-8, table.row th.col-lg-9, table.row th.col-lg-10, table.row th.col-lg-11, table.row th.col-lg-12 { display: block; width: 100% !important; } .d-mobile { display: block !important; } .d-desktop { display: none !important; } } @media yahoo { .d-mobile { display: none !important; } .d-desktop { display: block !important; } } </style> </head> <body style=" -moz-box-sizing: border-box; -ms-text-size-adjust: 100%; -webkit-box-sizing: border-box; -webkit-text-size-adjust: 100%; margin: 0; border: 0; box-sizing: border-box; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; height: 100%; line-height: 24px; margin: 0; min-width: 100%; outline: 0; padding: 0; width: 100%; " > <div class="bg-light" style="background-color: #f8f9fa"> <table class="container" style=" border-collapse: collapse; border-spacing: 0px; font-family: Helvetica, Arial, sans-serif; " border="0" cellpadding="0" cellspacing="0" width="100%" > <tbody> <tr> <td align="center" style=" border-collapse: collapse; border-spacing: 0px; font-size: 16px; line-height: 24px; margin: 0; " > <!--[if (gte mso 9)|(IE)]> <table align="center"> <tbody> <tr> <td width="600"> <![endif]--> <table align="center" style=" border-collapse: collapse; border-spacing: 0px; font-family: Helvetica, Arial, sans-serif; " border="0" cellpadding="0" cellspacing="0" width="100%" > <tbody> <tr> <td style=" border-collapse: collapse; border-spacing: 0px; font-size: 16px; line-height: 24px; margin: 0; " > <div class="mb-4" style="margin-bottom: 24px"> <table class="card mb-4" style=" border: 1px solid #dee2e6; border-collapse: separate !important; border-spacing: 0px; font-family: Helvetica, Arial, sans-serif; overflow: hidden; " border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" width="100%" > <tbody> <tr> <td style=" border-collapse: collapse; border-spacing: 0px; font-size: 16px; line-height: 24px; margin: 0; " width="100%" > <div style=" background: white; border-top: 5px solid #ff5722; " > <div style=" width: 100%; background: #0d47a1; color: white; padding: 20px; " > <img width="200" src="${imagelogo}" alt="${sitename}" /> </div> <table class="card-body" style=" border-collapse: collapse; border-spacing: 0px; font-family: Helvetica, Arial, sans-serif; " border="0" cellpadding="0" cellspacing="0" width="100%" > <tbody> <tr> <td style=" border-collapse: collapse; border-spacing: 0px; font-size: 16px; line-height: 24px; margin: 0; padding: 20px; " width="100%" > <div> <p> ${message} </p> <table class="hr" style=" border: 0; border-collapse: collapse; border-spacing: 0px; font-family: Helvetica, Arial, sans-serif; " border="0" cellpadding="0" cellspacing="0" width="100%" > <tbody> <tr> <td style=" border-collapse: collapse; border-spacing: 0px; font-size: 16px; line-height: 24px; margin: 0; padding: 16px 0px; " width="100%" > <h5 class="text-muted text-center" style=" color: #636c72; font-size: 12px; font-weight: 500; line-height: 22px; margin-bottom: 8px; margin-top: 0; vertical-align: baseline; " > &copy; ${new Date().getFullYear()} ${sitename} </h5> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td> </tr> </tbody> </table> <![endif]--> </td> </tr> </tbody> </table> </div> </body></html>`,
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
      res.send("working");
      console.log(`${info.messageId}`);
    })
    .catch((error) => {
      res.send(error);
      console.log(error);
    });

  // res.send("working");
});

module.exports = router;

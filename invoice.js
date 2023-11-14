const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
var cors = require("cors");
var html_to_pdf = require("html-pdf-node");

router.use(cors());
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

const data = {
  name: "Anthony Erics",
};
let options = { format: "A4" };
// Example of options with args //
// let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

router.route("/").post((req, res) => {
  const {
    message,
    to,
    subject,
    name,
    sendername,
    trackid,
    packageType,
    from_city,
    from_state,
    from_country,
    to_address,
    to_city,
    to_country,
    time,
  } = req.body;

  let file = {
    content: `
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Order confirmation</title>
<meta name="robots" content="noindex,nofollow" />
<meta name="viewport" content="width=device-width; initial-scale=1.0;" />
<style type="text/css">
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
  body {
    margin: 0;
    padding: 0;
    background: #e1e1e1;
  }
  div,
  p,
  a,
  li,
  td {
    -webkit-text-size-adjust: none;
  }
  .ReadMsgBody {
    width: 100%;
    background-color: #ffffff;
  }
  .ExternalClass {
    width: 100%;
    background-color: #ffffff;
  }
  body {
    width: 100%;
    height: 100%;
    background-color: #e1e1e1;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }
  html {
    width: 100%;
  }
  p {
    padding: 0 !important;
    margin-top: 0 !important;
    margin-right: 0 !important;
    margin-bottom: 0 !important;
    margin-left: 0 !important;
  }
  .visibleMobile {
    display: none;
  }
  .hiddenMobile {
    display: block;
  }

  @media only screen and (max-width: 600px) {
    body {
      width: auto !important;
    }
    table[class="fullTable"] {
      width: 96% !important;
      clear: both;
    }
    table[class="fullPadding"] {
      width: 85% !important;
      clear: both;
    }
    table[class="col"] {
      width: 45% !important;
    }
    .erase {
      display: none;
    }
  }

  @media only screen and (max-width: 420px) {
    table[class="fullTable"] {
      width: 100% !important;
      clear: both;
    }
    table[class="fullPadding"] {
      width: 85% !important;
      clear: both;
    }
    table[class="col"] {
      width: 100% !important;
      clear: both;
    }
    table[class="col"] td {
      text-align: left !important;
    }
    .erase {
      display: none;
      font-size: 0;
      max-height: 0;
      line-height: 0;
      padding: 0;
    }
    .visibleMobile {
      display: block !important;
    }
    .hiddenMobile {
      display: none !important;
    }
  }
</style>

<!-- Header -->
<table
  width="100%"
  border="0"
  cellpadding="0"
  cellspacing="0"
  align="center"
  class="fullTable"
  bgcolor="#e1e1e1"
>
  
  <tr>
    <td>
      <table
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        align="center"
        class="fullTable"
        bgcolor="#ffffff"
        
      >
        <tr class="hiddenMobile">
          <td height="40"></td>
        </tr>
        <tr class="visibleMobile">
          <td height="30"></td>
        </tr>

        <tr>
          <td>
            <table
              width="90%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="fullPadding"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      width="220"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      align="left"
                      class="col"
                    >
                      <tbody>
                        <tr>
                          <td align="left">
                            <img
                              src="https://firebasestorage.googleapis.com/v0/b/icexpress-21465.appspot.com/o/logo.png?alt=media&token=99b1f214-8685-4351-8c4e-722e41a21e3b"
                              width="150"
                              alt="logo"
                              border="0"
                            />
                          </td>
                        </tr>
                        <tr class="hiddenMobile">
                          <td height="40"></td>
                        </tr>
                        <tr class="visibleMobile">
                          <td height="20"></td>
                        </tr>
                        <tr>
                          <td
                            style="
                              font-size: 15px;
                              color: #5b5b5b;
                              font-family: 'Open Sans', sans-serif;
                              line-height: 18px;
                              vertical-align: top;
                              text-align: left;
                            "
                          >
                            Hello, ${name}.
                            <br />
                            This is Your Payment invoice for IceXpress delivery
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      width="220"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      align="right"
                      class="col"
                    >
                      <tbody>
                        <tr class="visibleMobile">
                          <td height="20"></td>
                        </tr>
                        <tr>
                          <td height="5"></td>
                        </tr>
                        <tr>
                          <td
                            style="
                              font-size: 21px;
                              color: #ff0000;
                              letter-spacing: -1px;
                              font-family: 'Open Sans', sans-serif;
                              line-height: 1;
                              vertical-align: top;
                              text-align: right;
                            "
                          >
                            Invoice
                          </td>
                        </tr>
                        <tr></tr>
                        <tr class="hiddenMobile">
                          <td height="50"></td>
                        </tr>
                        <tr class="visibleMobile">
                          <td height="20"></td>
                        </tr>
                        <tr>
                          <td
                            style="
                              font-size: 15px;
                              color: #5b5b5b;
                              font-family: 'Open Sans', sans-serif;
                              line-height: 18px;
                              vertical-align: top;
                              text-align: right;
                            "
                          >
                            <small>TRACK ID:</small> ${trackid}<br />
                            <small>${time}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
<!-- /Header -->
<!-- Order Details -->
<table
  width="100%"
  border="0"
  cellpadding="0"
  cellspacing="0"
  align="center"
  class="fullTable"
  bgcolor="#e1e1e1"
>
  <tbody>
    <tr>
      <td>
        <table
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          align="center"
          class="fullTable"
          bgcolor="#ffffff"
        >
          <tbody>
            <tr></tr>
            <tr class="hiddenMobile">
              <td height="60"></td>
            </tr>
            <tr class="visibleMobile">
              <td height="40"></td>
            </tr>
            <tr>
              <td>
                <table
                  width="90%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  align="center"
                  class="fullPadding"
                >
                  <tbody>
                    <tr>
                      <th
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #5b5b5b;
                          font-weight: normal;
                          line-height: 1;
                          vertical-align: top;
                          padding: 0 10px 7px 0;
                        "
                        width="52%"
                        align="left"
                      >
                        Item
                      </th>
                      <th
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #5b5b5b;
                          font-weight: normal;
                          line-height: 1;
                          vertical-align: top;
                          padding: 0 0 7px;
                        "
                        align="left"
                      >
                        <small>SKU</small>
                      </th>
                      <th
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #5b5b5b;
                          font-weight: normal;
                          line-height: 1;
                          vertical-align: top;
                          padding: 0 0 7px;
                        "
                        align="center"
                      >
                        Quantity
                      </th>
                      <th
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #1e2b33;
                          font-weight: normal;
                          line-height: 1;
                          vertical-align: top;
                          padding: 0 0 7px;
                        "
                        align="right"
                      >
                        Subtotal
                      </th>
                    </tr>
                    <tr>
                      <td
                        height="1"
                        style="background: #bebebe"
                        colspan="4"
                      ></td>
                    </tr>
                    <tr>
                      <td height="10" colspan="4"></td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #ff0000;
                          line-height: 18px;
                          vertical-align: top;
                          padding: 10px 0;
                        "
                        class="article"
                      >
                        ${packageType} Delivery
                      </td>
                      <td
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #646a6e;
                          line-height: 18px;
                          vertical-align: top;
                          padding: 10px 0;
                        "
                      >
                        <small>MH792AM/A</small>
                      </td>
                      <td
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #646a6e;
                          line-height: 18px;
                          vertical-align: top;
                          padding: 10px 0;
                        "
                        align="center"
                      >
                        1
                      </td>
                      <td
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #1e2b33;
                          line-height: 18px;
                          vertical-align: top;
                          padding: 10px 0;
                        "
                        align="right"
                      >
                        $2,499.00
                      </td>
                    </tr>
                    <tr>
                      <td
                        height="1"
                        colspan="4"
                        style="border-bottom: 1px solid #e4e4e4"
                      ></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td height="20"></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<!-- /Order Details -->
<!-- Total -->
<table
  width="100%"
  border="0"
  cellpadding="0"
  cellspacing="0"
  align="center"
  class="fullTable"
  bgcolor="#e1e1e1"
>
  <tbody>
    <tr>
      <td>
        <table
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          align="center"
          class="fullTable"
          bgcolor="#ffffff"
        >
          <tbody>
            <tr>
              <td>
                <!-- Table Total -->
                <table
                  width="90%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  align="center"
                  class="fullPadding"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #646a6e;
                          line-height: 22px;
                          vertical-align: top;
                          text-align: right;
                        "
                      >
                        Subtotal
                      </td>
                      <td
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #646a6e;
                          line-height: 22px;
                          vertical-align: top;
                          text-align: right;
                          white-space: nowrap;
                        "
                        width="80"
                      >
                        $2,514.00
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #646a6e;
                          line-height: 22px;
                          vertical-align: top;
                          text-align: right;
                        "
                      >
                        Shipping &amp; Handling
                      </td>
                      <td
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #646a6e;
                          line-height: 22px;
                          vertical-align: top;
                          text-align: right;
                        "
                      >
                        $15.00
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #000;
                          line-height: 22px;
                          vertical-align: top;
                          text-align: right;
                        "
                      >
                        <strong>Grand Total (Incl.Tax)</strong>
                      </td>
                      <td
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #000;
                          line-height: 22px;
                          vertical-align: top;
                          text-align: right;
                        "
                      >
                        <strong>$2,586.00</strong>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #b0b0b0;
                          line-height: 22px;
                          vertical-align: top;
                          text-align: right;
                        "
                      >
                        <small>TAX</small>
                      </td>
                      <td
                        style="
                          font-size: 15px;
                          font-family: 'Open Sans', sans-serif;
                          color: #b0b0b0;
                          line-height: 22px;
                          vertical-align: top;
                          text-align: right;
                        "
                      >
                        <small>$72.40</small>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- /Table Total -->
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<!-- /Total -->
<!-- Information -->
<table
  width="100%"
  border="0"
  cellpadding="0"
  cellspacing="0"
  align="center"
  class="fullTable"
  bgcolor="#e1e1e1"
>
  <tbody>
    <tr>
      <td>
        <table
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          align="center"
          class="fullTable"
          bgcolor="#ffffff"
        >
          <tbody>
            <tr></tr>
            <tr class="hiddenMobile">
              <td height="60"></td>
            </tr>
            <tr class="visibleMobile">
              <td height="40"></td>
            </tr>
            <tr>
              <td>
                <table
                  width="90%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  align="center"
                  class="fullPadding"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          width="220"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          align="left"
                          class="col"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  font-size: 11px;
                                  font-family: 'Open Sans', sans-serif;
                                  color: #5b5b5b;
                                  line-height: 1;
                                  vertical-align: top;
                                "
                              >
                                <strong>FROM</strong>
                              </td>
                            </tr>
                            <tr>
                              <td width="100%" height="10"></td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-size: 15px;
                                  font-family: 'Open Sans', sans-serif;
                                  color: #5b5b5b;
                                  line-height: 20px;
                                  vertical-align: top;
                                "
                              >
                                ${sendername}<br />
                                ${from_city}<br />
                                ${from_state}<br />
                                ${from_country}<br />
                                ${time}
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          width="220"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          align="right"
                          class="col"
                        >
                          <tbody>
                            <tr class="visibleMobile">
                              <td height="20"></td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-size: 11px;
                                  font-family: 'Open Sans', sans-serif;
                                  color: #5b5b5b;
                                  line-height: 1;
                                  vertical-align: top;
                                "
                              >
                                <strong>TO</strong>
                              </td>
                            </tr>
                            <tr>
                              <td width="100%" height="10"></td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  font-size: 15px;
                                  font-family: 'Open Sans', sans-serif;
                                  color: #5b5b5b;
                                  line-height: 20px;
                                  vertical-align: top;
                                "
                              >
                                ${name}<br />
                                ${to_address}<br />
                                ${to_city}<br />
                                ${to_country}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr class="hiddenMobile">
              <td height="60"></td>
            </tr>
            <tr class="visibleMobile">
              <td height="30"></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<!-- /Information -->
<table
  width="100%"
  border="0"
  cellpadding="0"
  cellspacing="0"
  align="center"
  class="fullTable"
  bgcolor="#e1e1e1"
>
  <tr>
    <td>
      <table
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        align="center"
        class="fullTable"
        bgcolor="#ffffff"
        style="border-radius: 0 0 10px 10px"
      >
        <tr>
          <td>
            <table
              width="90%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="fullPadding"
            >
              <tbody>
                <tr>
                  <td
                    style="
                      font-size: 15px;
                      color: #5b5b5b;
                      font-family: 'Open Sans', sans-serif;
                      line-height: 18px;
                      vertical-align: top;
                      text-align: left;
                    "
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/icexpress-21465.appspot.com/o/paid-rubber-stamp-vector-12315527.jpg?alt=media&token=650ebdc6-0c55-44aa-9ffb-73ac718c7634"
                      width="200"
                    />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/icexpress-21465.appspot.com/o/Michael-Jordan-personal-autograph.png?alt=media&token=0d3708ab-9f46-49a6-9d3b-dc52645ac0e4"
                      width="200"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr class="spacer">
          <td height="50"></td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td height="20"></td>
  </tr>
</table>
    `,
  };

  html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "mail.binanceearnpro.online",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "support@binanceearnpro.online", // generated ethereal user
          pass: "asapdogood@2023", // generated ethereal password
        },
      });

      const sitename = "IceXpress Delivery";
      const imagelogo =
        "https://firebasestorage.googleapis.com/v0/b/icexpress-21465.appspot.com/o/icelogo.png?alt=media&token=3cd66abf-2236-4ba8-8883-b4dc03e3e932"; // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"IceXpress Delivery" <support@binanceearnpro.online>', // sender address
        bcc: to, // list of receivers
        subject: `${subject} / IceXpress Delivery ✔`,

        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html> <head> <meta charset="utf-8" /> <style> .ExternalClass { width: 100%; } /* Forces Outlook.com to display emails at full width */ .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; } /* Forces Outlook.com to display normal line spacing, here is more on that: http://www.emailonacid.com/forum/viewthread/43/ */ .imageFix { display: block; } a { text-decoration: none; } @media screen and (max-width: 600px) { table.row th.col-lg-1, table.row th.col-lg-2, table.row th.col-lg-3, table.row th.col-lg-4, table.row th.col-lg-5, table.row th.col-lg-6, table.row th.col-lg-7, table.row th.col-lg-8, table.row th.col-lg-9, table.row th.col-lg-10, table.row th.col-lg-11, table.row th.col-lg-12 { display: block; width: 100% !important; } .d-mobile { display: block !important; } .d-desktop { display: none !important; } } @media yahoo { .d-mobile { display: none !important; } .d-desktop { display: block !important; } } </style> </head> <body style=" -moz-box-sizing: border-box; -ms-text-size-adjust: 100%; -webkit-box-sizing: border-box; -webkit-text-size-adjust: 100%; margin: 0; border: 0; box-sizing: border-box; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; height: 100%; line-height: 24px; margin: 0; min-width: 100%; outline: 0; padding: 0; width: 100%; " > <div class="bg-light" style="background-color: #f8f9fa"> <table class="container" style=" border-collapse: collapse; border-spacing: 0px; font-family: Helvetica, Arial, sans-serif; " border="0" cellpadding="0" cellspacing="0" width="100%" > <tbody> <tr> <td align="center" style=" border-collapse: collapse; border-spacing: 0px; font-size: 16px; line-height: 24px; margin: 0; " > <!--[if (gte mso 9)|(IE)]> <table align="center"> <tbody> <tr> <td width="600"> <![endif]--> <table align="center" style=" border-collapse: collapse; border-spacing: 0px; font-family: Helvetica, Arial, sans-serif; " border="0" cellpadding="0" cellspacing="0" width="100%" > <tbody> <tr> <td style=" border-collapse: collapse; border-spacing: 0px; font-size: 16px; line-height: 24px; margin: 0; " > <div class="mb-4" style="margin-bottom: 24px"> <table class="card mb-4" style=" border: 1px solid #dee2e6; border-collapse: separate !important; border-spacing: 0px; font-family: Helvetica, Arial, sans-serif; overflow: hidden; " border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" width="100%" > <tbody> <tr> <td style=" border-collapse: collapse; border-spacing: 0px; font-size: 16px; line-height: 24px; margin: 0; " width="100%" > <div style=" background: white; border-top: 5px solid #ff5722; " > <div style=" width: 100%; background: #0d47a1; color: white; padding: 20px; " > <img width="200" src="${imagelogo}" alt="${sitename}" /> </div> <table class="card-body" style=" border-collapse: collapse; border-spacing: 0px; font-family: Helvetica, Arial, sans-serif; " border="0" cellpadding="0" cellspacing="0" width="100%" > <tbody> <tr> <td style=" border-collapse: collapse; border-spacing: 0px; font-size: 16px; line-height: 24px; margin: 0; padding: 20px; " width="100%" > <div> <h5 class="text-muted text-center" style=" padding-top: 20px; color: #636c72; font-size: 20px; font-weight: 500; line-height: 22px; margin-bottom: 8px; margin-top: 0; vertical-align: baseline; " > Dear, ${name} </h5> <p style="padding-top: 12px"> ${message} </p> <table class="hr" style=" border: 0; border-collapse: collapse; border-spacing: 0px; font-family: Helvetica, Arial, sans-serif; " border="0" cellpadding="0" cellspacing="0" width="100%" > <tbody> <tr> <td style=" border-collapse: collapse; border-spacing: 0px; font-size: 16px; line-height: 24px; margin: 0; padding: 16px 0px; " width="100%" > <h5 class="text-muted text-center" style=" color: #636c72; font-size: 12px; font-weight: 500; line-height: 22px; margin-bottom: 8px; margin-top: 0; vertical-align: baseline; " > &copy; ${new Date().getFullYear()} ${sitename} </h5> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td> </tr> </tbody> </table> <![endif]--> </td> </tr> </tbody> </table> </div> </body></html>`,
        attachments: {
          filename: "invoice.pdf",
          content: new Buffer.from(pdfBuffer),
        },
      });

      return info;
    }

    main()
      .then((info) => {
        res.send("working");
        console.log("Message sent: %s", info.messageId);
      })
      .catch((error) => {
        //res.send(error);
        console.log(error);
      });
  });

  // res.send("working");
});

module.exports = router;

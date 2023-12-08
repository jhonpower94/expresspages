const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  user: process.env.EMAILCRYPTOK,
  pass: process.env.PASSCRYPTOK,
};

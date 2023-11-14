const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  user: process.env.EMAIL,
  pass: process.env.PASS,
};

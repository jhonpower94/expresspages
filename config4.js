const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  user: process.env.EMAILUC,
  pass: process.env.PASSUC,
};

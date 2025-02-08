const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  user: process.env.EMAILBIT,
  pass: process.env.PASSBIT,
  host: process.env.HOST
};
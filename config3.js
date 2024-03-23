const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  user: process.env.EMAILNB,
  pass: process.env.PASSNB,
};

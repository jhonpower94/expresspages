const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  user: process.env.EMAILAPEX,
  pass: process.env.PASSAPEX,
};

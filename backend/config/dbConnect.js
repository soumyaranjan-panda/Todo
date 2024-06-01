const mongoose = require("mongoose");
require("dotenv").config();
const URL = process.env.DATABASE_URL;

const dbConnect = () => {
  mongoose
    .connect(URL)
    .then(() => {
      console.log("DB connection successful");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = dbConnect;

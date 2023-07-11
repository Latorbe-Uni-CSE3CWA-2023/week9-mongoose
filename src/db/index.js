const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  return await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
  });
};

module.exports = {
  connect: dbConnect,
};

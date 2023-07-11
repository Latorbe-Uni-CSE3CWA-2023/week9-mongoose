const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const gymSchema = new mongoose.Schema({
  Id: {
    type: String,
    default: uuidv4,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Gym = mongoose.model("Gym", gymSchema);

module.exports = {
  gymSchema,
  Gym,
};

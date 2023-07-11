const mongoose = require("mongoose");
const { gymSchema } = require("./Gym");

const trainerSchema = new mongoose.Schema({
  Id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gyms: [gymSchema],
});

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;

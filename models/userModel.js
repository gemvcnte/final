const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["dean", "faculty"],
  },
  status: {
    type: String,
    required: true,
    enum: ["activated", "deactivated"],
    default: "deactivated",
  },
});

const User = mongoose.model("users", userSchema);

module.exports = { User };

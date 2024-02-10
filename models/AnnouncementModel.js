const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  typeOfContent: {
    type: String,
    required: true,
    // enum: ['']
  },
});

const Announcement = mongoose.model("announcement", announcementSchema);

module.exports = { Announcement };

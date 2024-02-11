const express = require("express");
const { User } = require("../models/userModel");
const { Announcement } = require("../models/AnnouncementModel");
const expressAsyncHandler = require("express-async-handler");
const router = express.Router();

router.post(
  "/auth/login",
  expressAsyncHandler(async (req, res) => {
    try {
      const { emailAddress, password } = req.body;
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal server error. Please try again later." });
    }
  }),
);

router.post(
  "/faculty/announcement/create-announcement",
  expressAsyncHandler(async (req, res) => {
    try {
      const { title, description, typeOfContent } = req.body;

      const existingAnnouncement = await Announcement.findOne(title);

      if (existingAnnouncement) {
        return res
          .status(400)
          .json({ message: "Announcement with this title has been created." });
      }

      const announcement = new Announcement({
        title,
        description,
        typeOfContent,
        status: "pending",
      });

      await announcement.save();
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal server error. Please try again later." });
    }
  }),
);

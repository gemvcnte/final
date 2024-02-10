const expressAsyncHandler = require("express-async-handler");
const { User } = require("../models/userModel");
const { Announcement } = require("../models/AnnouncementModel");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post(
  "/auth/login",
  expressAsyncHandler(async (req, res) => {
    try {
      const { emailAddress, password } = req.body;

      const existingUser = await User.findOne({ emailAddress });

      if (!existingUser) {
        return res.status(404).json({ message: "User not found." });
      }

      const compareUserPassword = await bcrypt.compare(
        password,
        existingUser.password,
      );

      if (!compareUserPassword) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      res.status(200).json({
        message: "Login successfully.",
        role: existingUser.role,
        name: existingUser.fullName,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal server error. Please try again later." });
    }
  }),
);

// for creating dean

router.post(
  "/dean/faculty/create-dean",
  expressAsyncHandler(async (req, res) => {
    try {
      const { fullName, emailAddress, password } = req.body;

      const existingUser = await User.findOne({ emailAddress });

      if (existingUser) {
        return res
          .status(400)
          .json({ message: "There is already a user with this email." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const dean = await User({
        fullName,
        emailAddress,
        password: hashedPassword,
        role: "dean",
        status: "activated",
      });

      await dean.save();

      return res.status(201).json({ message: "User has been created." });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal server error. Please try again later." });
    }
  }),
);

// For Creating a faculty
router.post(
  "/dean/faculty/create-faculty",
  expressAsyncHandler(async (req, res) => {
    try {
      const { emailAddress, password, fullName } = req.body;

      const existingUser = await User.findOne({ emailAddress });

      if (existingUser) {
        return res
          .status(400)
          .json({ message: "User with this email has been created." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const faculty = new User({
        fullName,
        emailAddress,
        password: hashedPassword,
        role: "faculty",
        status: "deactivated",
      });

      await faculty.save();

      return res.status(201).json({ message: "Faculty has been created." });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal server error. Please try again later." });
    }
  }),
);

// For Creating Announcement
router.post(
  "/dean/announcement/create-announcement",
  expressAsyncHandler(async (req, res) => {
    try {
      const { title, description, typeOfContent } = req.body;

      const existingAnnouncement = await Announcement.findOne({ title });

      if (existingAnnouncement) {
        return res
          .status(400)
          .json({ message: "Announcement with this title has been posted." });
      }

      const announcement = new Announcement({
        title,
        description,
        typeOfContent,
      });

      await announcement.save();

      return res
        .status(201)
        .json({ message: "Announcement has been created." });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal server error. Please try again later." });
    }
  }),
);

// for deleting an announcement

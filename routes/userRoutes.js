const express = require("express");

const {
  createUser,
  getUsers
} = require("../controllers/userController");

const {
  getUserBookings
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/", createUser);

router.get("/", getUsers);

router.get("/:id/bookings", getUserBookings);

module.exports = router;
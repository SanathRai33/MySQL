const express = require("express");

const {
  createBooking,
  getUserBookings,
  getBusBookings
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/", createBooking);

router.get("/users/:id/bookings", getUserBookings);

router.get("/buses/:id/bookings", getBusBookings);

module.exports = router;
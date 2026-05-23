const express = require("express");

const {
  createBus,
  getAvailableBuses
} = require("../controllers/busController");

const {
  getBusBookings
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/", createBus);

router.get("/available/:seats", getAvailableBuses);

router.get("/:id/bookings", getBusBookings);

module.exports = router;
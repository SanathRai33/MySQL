const express = require("express");

const { addBus, getAvailableBuses } = require("../controllers/busController");

const router = express.Router();

router.post("/", addBus);
router.get("/available/:seats", getAvailableBuses);

module.exports = router;
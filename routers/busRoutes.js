const express = require("express");

const { createBus, getAvailableBuses } = require("../controllers/busController");

const router = express.Router();

router.post("/", createBus);
router.get("/available/:seats", getAvailableBuses);


module.exports = router;
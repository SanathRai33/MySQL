const { Op } = require("sequelize");

const Buses = require("../models/buses");


const createBus = async (req, res) => {

  try {

    const { busNumber, totalSeats, availableSeats } = req.body;

    const bus = await Buses.create({
      busNumber,
      totalSeats,
      availableSeats
    });

    console.log("Bus inserted");

    res.status(201).json(bus);

  } catch (error) {

    console.log(error);

    res.status(500).send("Error creating bus");
  }
};


const getAvailableBuses = async (req, res) => {

  try {

    const { seats } = req.params;

    const buses = await Buses.findAll({
      where: {
        availableSeats: {
          [Op.gt]: seats
        }
      }
    });

    res.json(buses);

  } catch (error) {

    console.log(error);

    res.status(500).send("Error fetching buses");
  }
};


module.exports = {
  createBus,
  getAvailableBuses
};
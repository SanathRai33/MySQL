const { Bookings, Users, Buses } = require("../models");


const createBooking = async (req, res) => {

  try {

    const { userId, busId, seatNumber } = req.body;

    const booking = await Bookings.create({
      userId,
      busId,
      seatNumber
    });

    console.log("Booking created");

    res.status(201).json(booking);

  } catch (error) {

    console.log(error);

    res.status(500).send("Error creating booking");

  }

};


const getUserBookings = async (req, res) => {

  try {

    const { id } = req.params;

    const bookings = await Bookings.findAll({

      where: {
        userId: id
      },

      include: [
        {
          model: Buses,
          attributes: ["busNumber"]
        }
      ]

    });

    res.json(bookings);

  } catch (error) {

    console.log(error);

    res.status(500).send("Error fetching user bookings");

  }

};


const getBusBookings = async (req, res) => {

  try {

    const { id } = req.params;

    const bookings = await Bookings.findAll({

      where: {
        busId: id
      },

      include: [
        {
          model: Users,
          attributes: ["name", "email"]
        }
      ]

    });

    res.json(bookings);

  } catch (error) {

    console.log(error);

    res.status(500).send("Error fetching bus bookings");

  }

};


module.exports = {
  createBooking,
  getUserBookings,
  getBusBookings
};
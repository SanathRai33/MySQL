const connection = require("../utils/db-connection");


const addBus = (req, res) => {

  const { bus_number, total_seats, available_seats } = req.body;

  const query = `
    INSERT INTO buses (bus_number, total_seats, available_seats)
    VALUES (?, ?, ?)
  `;

  connection.execute(
    query,
    [bus_number, total_seats, available_seats],
    (err, result) => {

      if (err) {
        console.log(err);
        return res.status(500).send("Error adding bus");
      }

      res.send("Bus added successfully");
    }
  );

};


const getAvailableBuses = (req, res) => {

  const seats = req.params.seats;

  const query = `
    SELECT * FROM buses
    WHERE available_seats > ?
  `;

  connection.execute(query, [seats], (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).send("Error fetching buses");
    }

    res.json(result);
  });

};

module.exports = {
  addBus,
  getAvailableBuses
};
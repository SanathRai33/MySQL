require("dotenv").config();

const express = require("express");
const sequelize = require("./utils/db-connection");

require("./models");

const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Running");
});


app.use("/users", userRoutes);
app.use("/buses", busRoutes);
app.use("/bookings", bookingRoutes);


sequelize.sync()
  .then(() => {

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });

  })
  .catch((error) => {
    console.log(error);
  });
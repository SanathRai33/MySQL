require("dotenv").config();

const express = require("express");
const sequelize = require("./utils/db-connection");
const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bus Booking API Running");
});

app.use("/users", userRoutes);
app.use("/buses", busRoutes);


sequelize.sync({ force: false })
  .then(async () => {

    console.log("Tables created successfully");

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
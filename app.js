require("dotenv").config();
const express = require("express");
const db = require("./utils/db-connection");
const userRoutes = require("./routers/userRoutes");
const busRoutes = require("./routers/busRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);
app.use("/buses", busRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

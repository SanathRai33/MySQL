require("dotenv").config();
const express = require("express");
const db = require("./utils/db-connection");
const studentRoter = require("./routers/studentRouter");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/students", studentRoter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


connection.connect((err) => {

  if (err) {
    console.log("Database connection failed");
    console.log(err);
    return;
  }

  console.log("MySQL Connected Successfully");

  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE
    )
  `;

  connection.execute(createUsersTableQuery, (err) => {
    if (err) {
      console.log("Error creating users table");
      console.log(err);
      return;
    }
    console.log("Users table created or already exists");
  });

  const createBusesTableQuery = `
    CREATE TABLE IF NOT EXISTS buses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      bus_number VARCHAR(255) NOT NULL UNIQUE,
      total_seats INT NOT NULL,
      available_seats INT NOT NULL
    )
  `;

  connection.execute(createBusesTableQuery, (err) => {
    if (err) {
      console.log("Error creating buses table");
      console.log(err);
      return;
    }
    console.log("Buses table created or already exists");
  });

  const createBookingsTableQuery = `
    CREATE TABLE IF NOT EXISTS bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      seat_number INT NOT NULL
)`;

  connection.execute(createBookingsTableQuery, (err) => {
    if (err) {
      console.log("Error creating bookings table");
      console.log(err);
      return;
    }
    console.log("Bookings table created or already exists");
  });

  const createPaymentsTableQuery = `
    CREATE TABLE IF NOT EXISTS payments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      amountPaid INT NOT NULL,
      paymentStatus VARCHAR(255) NOT NULL
    )
  `;

  connection.execute(createPaymentsTableQuery, (err) => {
    if (err) {
      console.log("Error creating payments table");
      console.log(err);
      return;
    }
    console.log("Payments table created or already exists");
  });
  connection.end();
});



app.get("/", (req, res) => {
  res.send("Hello World");
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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

  connection.query(createUsersTableQuery, (err) => {
    if (err) {
      console.error("Error creating users table:", err);
      connection.end();
      return;
    }

    console.log("Users table created or already exists");
  });

  
  const createBusesTableQuery = `
    CREATE TABLE IF NOT EXISTS buses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      bus_number VARCHAR(255) NOT NULL,
      total_seats INT NOT NULL,
      available_seats INT NOT NULL
    )
  `;

  connection.query(createBusesTableQuery, (err) => {
    if (err) {
      console.error("Error creating buses table:", err);
      connection.end();
      return;
    }

    console.log("Buses table created or already exists");
  });
});

module.exports = connection;

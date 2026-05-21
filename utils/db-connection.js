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

  const createStudentsTableQuery = `
    CREATE TABLE IF NOT EXISTS Students (
      id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    )
  `;

  connection.query(createStudentsTableQuery, (err) => {
    if (err) {
      console.error("Error creating students table:", err);
      connection.end();
      return;
    }

    console.log("Students table created or already exists");
  });

  connection.end();
});

module.exports = connection;

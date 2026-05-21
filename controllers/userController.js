const connection = require("../utils/db-connection");


const addUser = (req, res) => {

  const { name, email } = req.body;

  const query = `
    INSERT INTO users (name, email)
    VALUES (?, ?)
  `;

  connection.execute(query, [name, email], (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).send("Error adding user");
    }

    res.send("User added successfully");
  });

};


const getUsers = (req, res) => {

  const query = `SELECT * FROM users`;

  connection.execute(query, (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).send("Error fetching users");
    }

    res.json(result);
  });

};

module.exports = {
  addUser,
  getUsers
};
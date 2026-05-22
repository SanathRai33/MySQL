const Users = require("../models/users");


const createUser = async (req, res) => {

  try {

    const { name, email } = req.body;

    const user = await Users.create({
      name,
      email
    });

    console.log("User inserted");

    res.status(201).json(user);

  } catch (error) {

    console.log(error);

    res.status(500).send("Error creating user");
  }
};


const getUsers = async (req, res) => {

  try {

    const users = await Users.findAll();

    res.json(users);

  } catch (error) {

    console.log(error);

    res.status(500).send("Error fetching users");
  }
};


module.exports = {
  createUser,
  getUsers
};
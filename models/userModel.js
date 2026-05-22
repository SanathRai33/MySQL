const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");


const Users = sequelize.define("Users", {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }

});

module.exports = Users;
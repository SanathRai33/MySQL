const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db-connection");

const Payments = sequelize.define("Payments", {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  amountPaid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false
  }

});

module.exports = Payments;
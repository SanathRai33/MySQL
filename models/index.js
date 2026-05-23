const Users = require("./userModel");
const Buses = require("./busModel");
const Bookings = require("./bookingModel");


Users.hasMany(Bookings, {
  foreignKey: "userId"
});

Bookings.belongsTo(Users, {
  foreignKey: "userId"
});

Buses.hasMany(Bookings, {
  foreignKey: "busId"
});

Bookings.belongsTo(Buses, {
  foreignKey: "busId"
});


module.exports = {
  Users,
  Buses,
  Bookings
};
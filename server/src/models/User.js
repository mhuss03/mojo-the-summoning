// create your User model here
const { db, DataTypes, Model } = require("../db/config");

const User = db.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;

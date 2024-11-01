const { db, DataTypes, Model } = require("../db/config");

const Attack = db.define("Attacks", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mojoCost: {
    type: DataTypes.INTEGER,
  },
  staminaCost: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Attack;

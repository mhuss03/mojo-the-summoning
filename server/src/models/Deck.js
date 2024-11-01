const { db, DataTypes, Model } = require("../db/config");

const Deck = db.define("Deck", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  xp: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Deck;

const { db, DataTypes, Model } = require("../db/config");

const Card = db.define("Cards", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mojo: {
    type: DataTypes.INTEGER,
  },
  stamina: {
    type: DataTypes.INTEGER,
  },
  imgUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = Card;

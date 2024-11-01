// add your database connection here
const { Sequelize, DataTypes, Model } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./src/db/db.sqlite",
});

module.exports = { db, DataTypes, Model };

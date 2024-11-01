// add your database connection here
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
  });

exports.module = { sequelize, DataTypes, Model }
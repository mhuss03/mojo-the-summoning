const { sequelize, DataTypes, Model } = require('../db/config');

const Card = sequelize.define('Deck', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
})

exports.module = { Card };
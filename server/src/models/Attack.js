const { sequelize, DataTypes, Model } = require('../db/config');

const Attack = sequelize.define('Deck', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER,
})

exports.module = { Attack };
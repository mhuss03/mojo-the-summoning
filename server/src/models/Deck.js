const { sequelize, DataTypes, Model } = require('../db/config');

const Deck = sequelize.define('Deck', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
})

exports.module = { Deck };
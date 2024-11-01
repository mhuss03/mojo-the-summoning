// create your User model here
const { sequelize, Datatypes, Model } = require('../db/config');


const User = sequelize.define('User', {
    id: Datatypes.INTEGER,
    username: Datatypes.STRING
})

modules.exports = { User }
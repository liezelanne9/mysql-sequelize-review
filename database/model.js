const Sequelize = require('sequelize');
const connection = require('./index');

const Model = connection.define(
    'Todo',
    {
        name: { type: Sequelize.STRING, allowNull: false },
    },
    { timestamps: false },
);

connection
    .sync()
    .then(() => console.log('Synced with MySQL database'))
    .catch(error => console.error(error));

module.exports = Model;
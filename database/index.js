const Sequelize = require('sequelize');

const connection = new Sequelize('mysqlreview', 'root', 'hackreactor', {
    host: 'localhost',
    dialect: 'mysql'
});

connection
    .authenticate()
    .then(() => console.log('Connected to MySQL Database'))
    .catch(error => console.error(error));

module.exports = connection;
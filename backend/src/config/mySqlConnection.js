const {Sequelize} = require("sequelize");
const dotenv = require('dotenv');

dotenv.config();
const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    db.sync({ force: false })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Failed to synchronize database:', error);
    });
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = db;
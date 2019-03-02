const Sequelize = require('sequelize');

const sequelize = new Sequelize('twitchchat', 'root', 'root', {
  host: 'ec2-54-183-207-172.us-west-1.compute.amazonaws.com',
  dialect: 'mysql',
  operatorsAliases: false,
  define: {
    timestamps: false
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;


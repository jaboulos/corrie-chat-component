const Sequelize = require('sequelize');
const hostName = 'ec2-13-57-226-191.us-west-1.compute.amazonaws.com'

const sequelize = new Sequelize('twitchchat', 'root', 'root', {
  host: hostName,
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


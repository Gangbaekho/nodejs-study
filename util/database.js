const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'jinsoo', 'jinsoo', {
  dialect: 'mysql',
  host: 'localhost'
})

module.exports = sequelize;

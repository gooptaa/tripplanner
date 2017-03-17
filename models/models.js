const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:3000/tripplanner')


module.exports = {
  db: db
}

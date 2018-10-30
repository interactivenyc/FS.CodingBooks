const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  inventoryQuantity: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: '/You_dont_know_JS.jpeg'
  }
})

module.exports = Product

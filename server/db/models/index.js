const db = require('../db')
const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Cart = require('./cart')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Product.belongsToMany(Category, {
  through: 'category_associations',
  foreignKey: 'productId'
})
Category.belongsToMany(Product, {
  through: 'category_associations',
  foreignKey: 'categoryId'
})
Cart.hasOne(User)
User.belongsTo(Cart)
Cart.belongsToMany(Product, {
  through: 'cart_products',
  foreignKey: 'cartId'
})
Product.belongsToMany(Cart, {
  through: 'cart_products',
  foreignKey: 'productId'
})

const CategoryAssociations = db.model('category_associations')
const CartProducts = db.model('cart_products')

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Category,
  Product,
  Cart,
  CategoryAssociations,
  CartProducts
}

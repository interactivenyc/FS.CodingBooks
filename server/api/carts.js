const router = require('express').Router()
const {CartProducts, Product, Cart} = require('../db/models')

module.exports = router

// api/carts/:id
router.get('/:id', async (req, res, next) => {
  try {
    const cart = await CartProducts.findAll({where: {cartId: req.params.id}})
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

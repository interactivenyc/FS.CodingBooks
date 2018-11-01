const router = require('express').Router()
const {CartProducts} = require('../db/models')

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

// api/carts/remove/:productId
router.delete('/remove/:productId', async (req, res, next) => {
  try {
    const itemToDelete = await CartProducts.findOne({
      where: {cartId: req.user.cartId, productId: req.params.productId}
    })
    const deletedItem = await CartProducts.destroy({
      where: {id: itemToDelete.id}
    })
    console.log(deletedItem)
  } catch (err) {
    next(err)
  }
})

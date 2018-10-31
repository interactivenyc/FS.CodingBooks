const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

// api/products
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll()
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
})

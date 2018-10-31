const router = require('express').Router()
const {Product, Category} = require('../db/models')
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

// api/products/categories
router.get('/categories', async (req, res, next) => {
  try {
    const allCategory = await Category.findAll()
    res.json(allCategory)
  } catch (err) {
    next(err)
  }
})

const router = require('express').Router()
const {Product, Category} = require('../db/models')
const db = require('../db')
const CategoryAssociations = db.model('category_associations')
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

router.get('/associations', async (req, res, next) => {
  try {
    const associations = await CategoryAssociations.findAll()
    res.json(associations)
  } catch (err) {
    next(err)
  }
})

router.get('/categories/:id', async (req, res, next) => {
  try {
    const selectedCategory = await Category.findById(req.params.id)
    res.json(selectedCategory)
  } catch (err) {
    next(err)
  }
})

const router = require('express').Router()
const {User, CartProducts} = require('../db/models')
module.exports = router

// api/users
router.get('/', async (req, res, next) => {
  let isAdmin = false

  try {
    if (req.user) {
      isAdmin = req.user.dataValues.isAdmin || false
      console.log(
        '[API] GET USERS req.user isAdmin',
        isAdmin,
        req.user.dataValues
      )
    } else {
      console.log("req.user doesn't exist")
    }
  } catch (error) {
    console.error(error)
  }

  try {
    if (isAdmin) {
      let users = await User.findAll({
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        // attributes: ['id', 'email']
      })
      console.log('[API] GET USERS isAdmin - showing results')
      res.json(users)
    } else {
      res.send("sorry, you don't have access to this feature")
    }
  } catch (err) {
    next(err)
  }
})

// users/remove/:userId
router.delete('/remove/:userId', async (req, res, next) => {
  const id = req.params.userId
  try {
    await User.destroy({
      where: {
        id
      }
    })
    res.status(202).json(id)
  } catch (err) {
    next(err)
  }
})

// api/users/orders/:cartId
router.get('/orders/:cartId', async (req, res, next) => {
  const cartId = req.params.cartId
  const orders = await CartProducts.findAll({
    attributes: ['payDate', 'id', 'cartId', 'productId', 'pricePaid'],
    where: {
      cartId,
      paid: true
    }
  })
  res.json(orders)
})

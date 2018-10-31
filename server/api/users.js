const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

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

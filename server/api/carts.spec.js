const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const {CartProducts, Cart, Product} = require('../db/models')

describe('Cart routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('fetching cart by id ("/:id")', () => {
    // const testProduct1 = await Product.create

    it('returns the list of products in the cart', async () => {
      const testCart = await Cart.create()
      const productOne = await Product.create({title: 'Test Book 1', price: 1})
      const productTwo = await Product.create({title: 'Test Book 2', price: 2})
      await Promise.all([
        CartProducts.create({cartId: testCart.id, productId: productOne.id}),
        CartProducts.create({cartId: testCart.id, productId: productTwo.id})
      ])
      const res = await request(app)
        .get(`/api/carts/${testCart.id}`)
        .expect(200)
      expect(Array.isArray(res.body)).to.equal(true)
      expect(res.body.length).to.equal(2)
    })

    it('handles quantity', async () => {
      const testCart = await Cart.create()
      const productOne = await Product.create({title: 'Test Book 1', price: 1})
      const productTwo = await Product.create({title: 'Test Book 2', price: 2})
      await Promise.all([
        CartProducts.create({cartId: testCart.id, productId: productOne.id}),
        CartProducts.create({cartId: testCart.id, productId: productTwo.id}),
        CartProducts.create({cartId: testCart.id, productId: productOne.id})
      ])
      const res = await request(app)
        .get(`/api/carts/${testCart.id}`)
        .expect(200)

      const prodOneQuantity = res.body.reduce((total, item) => {
        if (item.productId === productOne.id) total++
        return total
      }, 0)
      const prodTwoQuantity = res.body.reduce((total, item) => {
        if (item.productId === productTwo.id) total++
        return total
      }, 0)
      expect(prodOneQuantity).to.equal(2)
      expect(prodTwoQuantity).to.equal(1)
    })
  })
})

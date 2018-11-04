'use strict'

const db = require('../server/db')
const {
  User,
  Category,
  Product,
  Cart,
  CategoryAssociations,
  CartProducts
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const cart = await Promise.all([
    Cart.create(),
    Cart.create(),
    Cart.create(),
    Cart.create(),
    Cart.create(),
    Cart.create(),
    Cart.create(),
    Cart.create()
  ])

  const users = await Promise.all([
    User.create({
      lastName: 'Pug',
      firstName: 'Cody',
      address: '51 Cody Drive, Pug Street NY 00000',
      phone: '123-456-7891',
      image: 'https://odadee.net/themes/default/assets/images/default.jpg',
      email: 'cody@email.com',
      password: '123',
      cartId: 1,
      isAdmin: true
    }),
    User.create({
      lastName: 'Cat',
      firstName: 'Murphy',
      address: '52 Murff Drive, Cat Street NY 00000',
      phone: '987-675-4321',
      image:
        'https://images.onlinelabels.com/images/clip-art/dagobert83/dagobert83_female_user_icon.png',
      email: 'murphfy@email.com',
      password: '123',
      cartId: 2
    }),
    User.create({
      lastName: 'Monahan',
      firstName: 'Patrik',
      address: '123 Pat St, Mon NY 00000',
      phone: '987-675-4321',
      email: 'pmon@email.com',
      password: '123',
      cartId: 3,
      image: 'https://s3.r29static.com//bin/entry/836/680x816,80/2059585/image.jpg'
    }),
    User.create({
      lastName: 'Chng',
      firstName: 'Kistn',
      address: '42 Cong St, Krsnt City NY 00000',
      phone: '987-675-4321',
      email: 'kch@email.com',
      password: '123',
      cartId: 4,
      image: 'https://avatars0.githubusercontent.com/u/37722883?s=400&v=4'
    }),
    User.create({
      lastName: 'Warn',
      firstName: 'Steev',
      address: '422 Steeve Drive, Warrn City NY 00000',
      phone: '987-675-4321',
      email: 'swarn@email.com',
      password: '123',
      cartId: 5,
      image: 'https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s1600-c85.jpg'
    })
  ])

  const category = await Promise.all([
    Category.create({name: 'Javascript'}),
    Category.create({name: 'Algorithm'}),
    Category.create({name: 'React'})
  ])

  const product = await Promise.all([
    Product.create({
      title: "You don't know Javascript",
      description:
        "No matter how much experience you have with JavaScript, odds are you don't fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You'll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset. Like other books in the `You Don't Know JS` series, Scope and Closures dives into trickier parts of the language that many JavaScript programmers simply avoid. Armed with this knowledge, you can achieve true JavaScript mastery. Learn about scope, a set of rules to help JavaScript engines locate variables in your code Go deeper into nested scope, a series of containers for variables and functions Explore function- and block-based scope,?hoisting?, and the patterns and benefits of scope-based hiding Discover how to use closures for synchronous and asynchronous tasks, including the creation of JavaScript libraries.",
      price: 34.99,
      inventoryQuantity: 20,
      photo:
        'https://prodimage.images-bn.com/pimages/9781491904244_p0_v4_s550x406.jpg'
    }),
    Product.create({
      title: 'Eloquent JavaScript: A Modern Introduction to Programming',
      description:
        "Eloquent JavaScript dives into this flourishing language and teaches you to write code that's beautiful and effective. By immersing you in example code and encouraging experimentation right from the start, the author quickly gives you the tools you need to build your own programs.",
      price: 17.99,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/515jiKSErDL._SX376_BO1,204,203,200_.jpg'
    }),
    Product.create({
      title: 'Algorithms Edition 4',
      description:
        'This fourth edition of Robert Sedgewick and Kevin Wayne’s Algorithms is the leading textbook on algorithms today and is widely used in colleges and universities worldwide. This book surveys the most important computer algorithms currently in use and provides a full treatment of data structures and algorithms for sorting, searching, graph processing, and string processing--including fifty algorithms every programmer should know. In this edition, new Java implementations are written in an accessible modular programming style, where all of the code is exposed to the reader and ready to use.',
      price: 85.49,
      inventoryQuantity: 20,
      photo: '/Algorithms.jpg'
    })
  ])

  const association = await Promise.all([
    CategoryAssociations.create({productId: 1, categoryId: 1}),
    CategoryAssociations.create({productId: 2, categoryId: 1}),
    CategoryAssociations.create({productId: 3, categoryId: 2})
  ])

  const cartAssociations = await Promise.all([
    CartProducts.create({productId: 1, cartId: 1}),
    CartProducts.create({productId: 2, cartId: 1}),
    CartProducts.create({productId: 3, cartId: 1})
  ])

  await CartProducts.create({productId: 3, cartId: 1})

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${category.length} category`)
  console.log(`seeded ${product.length} product`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

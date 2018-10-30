'use strict'

const db = require('../server/db')
const {User, Category, Product} = require('../server/db/models')
const CategoryAssociations = db.model('category_associations')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const category = await Promise.all([Category.create({name: 'Javascript'})])

  const product = await Promise.all([
    Product.create({
      title: "You don't know Javascript",
      description:
        "No matter how much experience you have with JavaScript, odds are you don't fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You'll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset. Like other books in the `You Don't Know JS` series, Scope and Closures dives into trickier parts of the language that many JavaScript programmers simply avoid. Armed with this knowledge, you can achieve true JavaScript mastery. Learn about scope, a set of rules to help JavaScript engines locate variables in your code Go deeper into nested scope, a series of containers for variables and functions Explore function- and block-based scope,?hoisting?, and the patterns and benefits of scope-based hiding Discover how to use closures for synchronous and asynchronous tasks, including the creation of JavaScript libraries.",
      price: 34.99,
      inventoryQuantity: 20
    }),
    Product.create({
      title: 'Eloquent JavaScript: A Modern Introduction to Programming',
      description:
        "Eloquent JavaScript dives into this flourishing language and teaches you to write code that's beautiful and effective. By immersing you in example code and encouraging experimentation right from the start, the author quickly gives you the tools you need to build your own programs.",
      price: 17.99,
      inventoryQuantity: 20,
      photo: 'Eloquent Javascript.jpg'
    })
  ])

  const association = await Promise.all([
    CategoryAssociations.create({productId: 1, categoryId: 1}),
    CategoryAssociations.create({productId: 2, categoryId: 1})
  ])

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

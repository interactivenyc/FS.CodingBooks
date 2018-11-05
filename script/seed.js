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
      categoryId: 1,
      price: 34.99,
      inventoryQuantity: 20,
      photo:
        'https://prodimage.images-bn.com/pimages/9781491904244_p0_v4_s550x406.jpg'
    }),
    Product.create({
      title: 'Eloquent JavaScript: A Modern Introduction to Programming',
      description:
        "Eloquent JavaScript dives into this flourishing language and teaches you to write code that's beautiful and effective. By immersing you in example code and encouraging experimentation right from the start, the author quickly gives you the tools you need to build your own programs.",
      categoryId: 1,
      price: 17.99,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/515jiKSErDL._SX376_BO1,204,203,200_.jpg'
    }),
    Product.create({
      title:
        "JavaScript QuickStart Guide: The Simplified Beginner's Guide to JavaScript",
      description:
        "Do you want to learn JavaScript but don't know where to start? Are you overwhelmed by the 1,000 page long books that simply have TOO much information and are impossible to follow? Do you want to be up and running with JavaScript in just a few hours? Do you like getting the best 'bang' for your 'buck'? (Of course you do!) \nIf so, then look no further. \"JavaScript QuickStart Guide will take you step-by-step through the learning process so you will understand the fundamentals of JavaScript and how to integrate JavaScript into your web pages in minutes! \nAre you looking to change careers to something that will pay you more and have more flexibility? Are you looking to learn just for fun on the side? No matter why you want to learn JavaScript the \"JavaScript QuickStart Guide\" has you covered.",
      categoryId: 1,
      price: 11.51,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/51OGcAjwIDL._SX404_BO1,204,203,200_.jpg'
    }),
    Product.create({
      title: 'JavaScript and JQuery: Interactive Front-End Web Development',
      description:
        'This full-color book will show you how to make your websites more interactive and your interfaces more interesting and intuitive. \nTHIS BOOK COVERS: \nBasic programming concepts - assuming no prior knowledge of programming beyond an ability to create a web page using HTML & CSS \nCore elements of the JavaScript language - so you can learn how to write your own scripts from scratch \njQuery - which will allow you to simplify the process of writing scripts (this is introduced half-way through the book once you have a solid understanding of JavaScript) \nHow to recreate techniques you will have seen on other web sites such as sliders, content filters, form validation, updating content using Ajax, and much more (these examples demonstrate writing your own scripts from scratch and how the theory you have learned is put into practice).',
      categoryId: 1,
      price: 27.99,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/41y31M-zcgL._SX400_BO1,204,203,200_.jpg'
    }),

    Product.create({
      title:
        'JavaScript - The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      description:
        "Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer's guide and comprehensive reference to the core language and to the client-side JavaScript APIs defined by web browsers. \n\nThe 6th edition covers HTML5 and ECMAScript 5. Many chapters have been completely rewritten to bring them in line with today's best web development practices. New chapters in this edition document jQuery and server side JavaScript. It's recommended for experienced programmers who want to learn the programming language of the Web, and for current JavaScript programmers who want to master it. \n\nA must-have reference for expert JavaScript programmers...well-organized and detailed. \n—Brendan Eich, creator of JavaScript, CTO of Mozilla \n\nI made a career of what I learned from JavaScript: The Definitive Guide.” \n—Andrew Hedges, Tapulous",
      categoryId: 1,
      price: 17.99,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/51CxDZt9xWL._AC_US218_.jpg'
    }),
    Product.create({
      title: 'Algorithms Edition 4',
      description:
        'This fourth edition of Robert Sedgewick and Kevin Wayne’s Algorithms is the leading textbook on algorithms today and is widely used in colleges and universities worldwide. This book surveys the most important computer algorithms currently in use and provides a full treatment of data structures and algorithms for sorting, searching, graph processing, and string processing--including fifty algorithms every programmer should know. In this edition, new Java implementations are written in an accessible modular programming style, where all of the code is exposed to the reader and ready to use.',
      categoryId: 2,
      price: 85.49,
      inventoryQuantity: 20,
      photo: 'https://images-na.ssl-images-amazon.com/images/I/41%2BpJNrGujL._SX359_BO1,204,203,200_.jpg'
    }),
    Product.create({
      title: 'Algorithms Illuminated: Part 1: The Basics',
      description:
        'Algorithms are the heart and soul of computer science. Their applications range from network routing and computational genomics to public-key cryptography and database system implementation. Studying algorithms can make you a better programmer, a clearer thinker, and a master of technical interviews. Algorithms Illuminated is an accessible introduction to the subject---a transcript of what an expert algorithms tutor would say over a series of one-on-one lessons. The exposition is rigorous but emphasizes the big picture and conceptual understanding over low-level implementation and mathematical details. \n\nPart 1 of the book series covers asymptotic analysis and big-O notation, divide-and-conquer algorithms and the master method, randomized algorithms, and several famous algorithms for sorting and selection.',
      categoryId: 2,
      price: 9.99,
      inventoryQuantity: 20,
      photo: 'https://images-na.ssl-images-amazon.com/images/I/51gIuC4rhyL.jpg'
    }),
    Product.create({
      title: 'Introduction to Algorithms, 3rd Edition (The MIT Press)',
      description:
        'A new edition of the essential text and professional reference, with substantial new material on such topics as vEB trees, multithreaded algorithms, dynamic programming, and edge-based flow. \n\nSome books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. Introduction to Algorithms uniquely combines rigor and comprehensiveness. The book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers. Each chapter is relatively self-contained and can be used as a unit of study. The algorithms are described in English and in a pseudocode designed to be readable by anyone who has done a little programming. The explanations have been kept elementary without sacrificing depth of coverage or mathematical rigor. \n\nThe first edition became a widely used text in universities worldwide as well as the standard reference for professionals. The second edition featured new chapters on the role of algorithms, probabilistic analysis and randomized algorithms, and linear programming. The third edition has been revised and updated throughout. It includes two completely new chapters, on van Emde Boas trees and multithreaded algorithms, substantial additions to the chapter on recurrence (now called “Divide-and-Conquer”), and an appendix on matrices. It features improved treatment of dynamic programming and greedy algorithms and a new notion of edge-based flow in the material on flow networks. Many new exercises and problems have been added for this edition. The international paperback edition is no longer available; the hardcover is available worldwide.',
      categoryId: 2,
      price: 65.46,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/41-1VkO%2B1lL._SX359_BO1,204,203,200_.jpg'
    }),

    Product.create({
      title:
        'Cracking the Coding Interview: 189 Programming Questions and Solutions',
      description:
        "I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer.  \n\nCracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book. \n\nLearn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.",
      categoryId: 2,
      price: 34.89,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg'
    }),
    Product.create({
      title: 'Algorithms to Live By: The Computer Science of Human Decisions',
      description:
        'What should we do, or leave undone, in a day or a lifetime? How much messiness should we accept? What balance of the new and familiar is the most fulfilling? These may seem like uniquely human quandaries, but they are not. Computers, like us, confront limited space and time, so computer scientists have been grappling with similar problems for decades. And the solutions they’ve found have much to teach us. \n\nIn a dazzlingly interdisciplinary work, Brian Christian and Tom Griffiths show how algorithms developed for computers also untangle very human questions. They explain how to have better hunches and when to leave things to chance, how to deal with overwhelming choices and how best to connect with others. From finding a spouse to finding a parking spot, from organizing one’s inbox to peering into the future, Algorithms to Live By transforms the wisdom of computer science into strategies for human living.',
      categoryId: 2,
      price: 15.94,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/41eOUSH5%2BTL._SX329_BO1,204,203,200_.jpg'
    }),

    Product.create({
      title:
        'React Design Patterns and Best Practices: Build easy to scale modular applications using the most powerful components and design patterns',
      description:
        "Taking a complete journey through the most valuable design patterns in React, this book demonstrates how to apply design patterns and best practices in real-life situations, whether that's for new or already existing projects. It will help you to make your applications more flexible, perform better, and easier to maintain - giving your workflow a huge boost when it comes to speed without reducing quality. \n\nWe'll begin by understanding the internals of React before gradually moving on to writing clean and maintainable code. We'll build components that are reusable across the application, structure applications, and create forms that actually work. \n\nThen we'll style React components and optimize them to make applications faster and more responsive. Finally, we'll write tests effectively and you'll learn how to contribute to React and its ecosystem. \n\nBy the end of the book, you'll be saved from a lot of trial and error and developmental headaches, and you will be on the road to becoming a React expert.",
      categoryId: 3,
      price: 43.69,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/51VF6WMLNmL._SX404_BO1,204,203,200_.jpg'
    }),

    Product.create({
      title: 'Learning React: Functional Web Development with React and Redux',
      description:
        'If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads. Along the way, you’ll learn how to work with functional programming and the latest ECMAScript features. \n\nDeveloped by Facebook, and used by companies including Netflix, Walmart, and The New York Times for large parts of their web interfaces, React is quickly growing in use. By learning how to build React components with this hands-on guide, you’ll fully understand how useful React can be in your organization.',
      categoryId: 3,
      price: 39.03,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg'
    }),

    Product.create({
      title: 'Learning React',
      description:
        'Learning React \n\nA hands-on guide to building maintainable, high-performing web application user interfaces using the React JavaScript library \n\nAs far as new web frameworks and libraries go, React is quite the runaway success. It not only deals with the most common problems developers face when building complex apps, it throws in a few additional tricks that make building the visuals for such apps much, much easier. \n\nWhat React isn’t, though, is beginner-friendly and approachable. Until now. In Learning React, author Kirupa Chinnathambi brings his fresh, clear, and very personable writing style to help you understand the fundamentals of React and how to use it to build really performant (and awesome) apps.',
      categoryId: 3,
      price: 36.81,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/514iO0Is6hL._SX388_BO1,204,203,200_.jpg'
    }),

    Product.create({
      title: 'Fullstack React: The Complete Guide to ReactJS and Friends',
      description:
        "What if you could master the entire framework in less time, with solid foundations, without beating your head against the wall? Imagine how quickly you can get all of your work done with the right tools and best practices. \n\nSeriously, let's stop wasting time scouring Google, searching through incorrect, out-of-date, blog posts and get everything you need to be productive in one, well-organized place, complete with both simple and complex examples to get your app up and running. \n\nYou'll learn what you need to know to work professionally and build solid, well-tested, optimized apps with ReactJS. This book is your definitive guide.",
      categoryId: 3,
      price: 59.99,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/5191hQHWkTL._SX384_BO1,204,203,200_.jpg'
    }),

    Product.create({
      title:
        'React Design Patterns and Best Practices: Build easy to scale modular applications using the most powerful components and design patterns',
      description:
        "Taking a complete journey through the most valuable design patterns in React, this book demonstrates how to apply design patterns and best practices in real-life situations, whether that's for new or already existing projects. It will help you to make your applications more flexible, perform better, and easier to maintain - giving your workflow a huge boost when it comes to speed without reducing quality. \n\nWe'll begin by understanding the internals of React before gradually moving on to writing clean and maintainable code. We'll build components that are reusable across the application, structure applications, and create forms that actually work. \n\nThen we'll style React components and optimize them to make applications faster and more responsive. Finally, we'll write tests effectively and you'll learn how to contribute to React and its ecosystem. \n\nBy the end of the book, you'll be saved from a lot of trial and error and developmental headaches, and you will be on the road to becoming a React expert.",
      categoryId: 3,
      price: 43.69,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/51VF6WMLNmL._SX404_BO1,204,203,200_.jpg'
    })
  ])

  const association = await Promise.all([
    CategoryAssociations.create({productId: 1, categoryId: 1}),
    CategoryAssociations.create({productId: 2, categoryId: 1}),
    CategoryAssociations.create({productId: 3, categoryId: 1}),
    CategoryAssociations.create({productId: 4, categoryId: 1}),
    CategoryAssociations.create({productId: 5, categoryId: 1}),
    CategoryAssociations.create({productId: 6, categoryId: 2}),
    CategoryAssociations.create({productId: 7, categoryId: 2}),
    CategoryAssociations.create({productId: 8, categoryId: 2}),
    CategoryAssociations.create({productId: 9, categoryId: 2}),
    CategoryAssociations.create({productId: 10, categoryId: 2}),
    CategoryAssociations.create({productId: 11, categoryId: 3}),
    CategoryAssociations.create({productId: 12, categoryId: 3}),
    CategoryAssociations.create({productId: 13, categoryId: 3}),
    CategoryAssociations.create({productId: 14, categoryId: 3}),
    CategoryAssociations.create({productId: 15, categoryId: 3})
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

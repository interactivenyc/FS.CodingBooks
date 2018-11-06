/* global describe beforeEach it */

import React from 'react'
import {Router, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import {expect} from 'chai'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)
import history from '../history'

import ReactTestRenderer from 'react-test-renderer'

import {ProductList} from './ProductList'
import SingleProductInList from './SingleProductInList'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Product List Component', () => {
  let productList
  let initialState = {
    animals: []
  }
  let store = mockStore(initialState)

  const products = [
    {
      title:
        'JavaScript - The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      description:
        "Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer's guide and comprehensive reference to the core language and to the client-side JavaScript APIs defined by web browsers. \n\nThe 6th edition covers HTML5 and ECMAScript 5. Many chapters have been completely rewritten to bring them in line with today's best web development practices. New chapters in this edition document jQuery and server side JavaScript. It's recommended for experienced programmers who want to learn the programming language of the Web, and for current JavaScript programmers who want to master it. \n\nA must-have reference for expert JavaScript programmers...well-organized and detailed. \n—Brendan Eich, creator of JavaScript, CTO of Mozilla \n\nI made a career of what I learned from JavaScript: The Definitive Guide.” \n—Andrew Hedges, Tapulous",
      categoryId: 1,
      price: 17.99,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/51CxDZt9xWL._AC_US218_.jpg'
    },
    {
      title: 'Introduction to Algorithms, 3rd Edition (The MIT Press)',
      description:
        'A new edition of the essential text and professional reference, with substantial new material on such topics as vEB trees, multithreaded algorithms, dynamic programming, and edge-based flow. \n\nSome books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. Introduction to Algorithms uniquely combines rigor and comprehensiveness. The book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers. Each chapter is relatively self-contained and can be used as a unit of study. The algorithms are described in English and in a pseudocode designed to be readable by anyone who has done a little programming. The explanations have been kept elementary without sacrificing depth of coverage or mathematical rigor. \n\nThe first edition became a widely used text in universities worldwide as well as the standard reference for professionals. The second edition featured new chapters on the role of algorithms, probabilistic analysis and randomized algorithms, and linear programming. The third edition has been revised and updated throughout. It includes two completely new chapters, on van Emde Boas trees and multithreaded algorithms, substantial additions to the chapter on recurrence (now called “Divide-and-Conquer”), and an appendix on matrices. It features improved treatment of dynamic programming and greedy algorithms and a new notion of edge-based flow in the material on flow networks. Many new exercises and problems have been added for this edition. The international paperback edition is no longer available; the hardcover is available worldwide.',
      categoryId: 2,
      price: 65.46,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/41-1VkO%2B1lL._SX359_BO1,204,203,200_.jpg'
    },
    {
      title:
        'React Design Patterns and Best Practices: Build easy to scale modular applications using the most powerful components and design patterns',
      description:
        "Taking a complete journey through the most valuable design patterns in React, this book demonstrates how to apply design patterns and best practices in real-life situations, whether that's for new or already existing projects. It will help you to make your applications more flexible, perform better, and easier to maintain - giving your workflow a huge boost when it comes to speed without reducing quality. \n\nWe'll begin by understanding the internals of React before gradually moving on to writing clean and maintainable code. We'll build components that are reusable across the application, structure applications, and create forms that actually work. \n\nThen we'll style React components and optimize them to make applications faster and more responsive. Finally, we'll write tests effectively and you'll learn how to contribute to React and its ecosystem. \n\nBy the end of the book, you'll be saved from a lot of trial and error and developmental headaches, and you will be on the road to becoming a React expert.",
      categoryId: 3,
      price: 43.69,
      inventoryQuantity: 20,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/51VF6WMLNmL._SX404_BO1,204,203,200_.jpg'
    }
  ]

  const categories = [
    {id: 1, name: 'Javascript'},
    {id: 2, name: 'Algorithm'},
    {id: 3, name: 'React'}
  ]

  describe('<ProductList /> Pulldown Categories', () => {
    beforeEach(() => {
      productList = ReactTestRenderer.create(
        <Provider store={store}>
          <Router history={history}>
            <ProductList product={products} allCategory={categories} />
          </Router>
        </Provider>
      )
    })

    it('renders a category selector menu', () => {
      let nameArray = [
        productList.root.findByType('ul').props.children[0].props.children,
        productList.root.findByType('ul').props.children[1].props.children,
        productList.root.findByType('ul').props.children[2].props.children,
        productList.root.findByType('ul').props.children[3].props.children
      ]

      expect(nameArray).to.deep.equal([
        'All',
        'Javascript',
        'Algorithm',
        'React'
      ])
    })
  })

  describe('<ProductList /> SingleProductInList exists', () => {
    beforeEach(() => {
      productList = shallow(
        <ProductList product={products} allCategory={categories} />
      )
    })

    it('renders SingleProductInList items', () => {
      expect(productList.find(SingleProductInList)).to.have.lengthOf(3)
    })
  })
})

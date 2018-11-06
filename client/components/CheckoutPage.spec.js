/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ConnectedProductList from '../components/ProductList'
import store from '../store'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('<ConnectedProductList /> component', () => {
  it('renders the corrent number of products', () => {
    const productList = shallow(<ConnectedProductList store={store} />)
    expect(productList).to.exist
  })
})

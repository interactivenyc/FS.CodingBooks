import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class ProductList extends React.Component {
  render() {
    return <div>{console.log(`PROPS HERE: `, this.props)}</div>
  }
}

const mapStateToProps = ({product}) => ({...product})

const ConnectedProductList = connect(mapStateToProps)(ProductList)

export default ConnectedProductList

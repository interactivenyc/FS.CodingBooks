import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, product} = props
  let featured = product ? product[Math.floor(Math.random() * product.length)] : {}

  return (
    featured ? (<div>
      {email ? <h3>Welcome, {email}</h3> : <h3>Welcome</h3>}
      <div className="pusher">
        <div className="ui inverted vertical masthead center aligned segment">

          <div className="ui text container">
            <h1 className="ui inverted header">
              CODING BOOKS
            </h1>
            <h2>Refactor your life with these coding books!</h2>
            <a href='/products' className="ui huge primary button">View Our Products <i className="right arrow icon"></i></a>
          </div>

        </div>

        <div className="ui vertical stripe segment">
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="eight wide column">
                <h2 className="ui header">FEATURED PRODUCT:</h2>
                <h1 className="ui header">{featured.title}</h1>
                <p>{featured.description}</p>
              </div>
              <div className="six wide right floated column">
                <img src={featured.photo}></img>
              </div>
            </div>
            <div className="row">
              <div className="center aligned column">
                <a href={"products/" + featured.id} className="ui huge button">Take a Look</a>
              </div>
            </div>
          </div>
        </div>


        <div className="ui vertical stripe quote segment">
          <div className="ui equal width stackable internally celled grid">
            <div className="center aligned row">
              <div className="column">
                <h2>"These Coding book guys are awesome"</h2>
                <p>- Cody</p>
              </div>
              <div className="column">
                <h2>"I'll never buy a coding book from anywhere else!"</h2>
                <p>- Cody again</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ui inverted vertical footer segment">
          <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
              <div className="three wide column">
              </div>
              <div className="three wide column">
              </div>
              <div className="seven wide column">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>) :
    <div></div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    product: state.product
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

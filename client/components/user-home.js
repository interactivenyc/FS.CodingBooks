import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, product} = props
  console.log('[UserHome] render email:', email)
  

  return (
    <div>
      {email ? <h3>Welcome, {email}</h3> : <h3>Welcome!</h3>}
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
                <h2 className="ui header">We Help Companies and Companions</h2>
                <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                <h2 className="ui header">We Make Bananas That Can Dance</h2>
                <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
              </div>
              <div className="six wide right floated column">
                <img src="https://media.giphy.com/media/Q56SF4czEtSZG/giphy.gif" className="ui large bordered rounded image"></img>
              </div>
            </div>
            <div className="row">
              <div className="center aligned column">
                <a className="ui huge button">Check Them Out</a>
              </div>
            </div>
          </div>
        </div>


        <div className="ui vertical stripe quote segment">
          <div className="ui equal width stackable internally celled grid">
            <div className="center aligned row">
              <div className="column">
                <h2>"What a Company"</h2>
                <p>That is what they all say about us</p>
              </div>
              <div className="column">
                <h2>"I shouldn't have gone with their competitor."</h2>
                <p>
                  <img src="favicon.ico" className="ui avatar image"></img> <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
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
    </div>
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

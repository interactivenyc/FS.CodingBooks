import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email = 'Not Logged In'} = props
  console.log('[UserHome] render email:', email)

  return (
    <div>
      <h3>Welcome, {email}</h3>
      {/* <div className="pusher">
        <div className="ui inverted vertical masthead center aligned segment">

          <div className="ui text container">
            <h1 className="ui inverted header">
              Imagine-a-Company
            </h1>
            <h2>Do whatever you want when you want to.</h2>
            <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>
          </div>

        </div>

        <div className="ui vertical stripe segment">
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="eight wide column">
                <h3 className="ui header">We Help Companies and Companions</h3>
                <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                <h3 className="ui header">We Make Bananas That Can Dance</h3>
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
                <h3>"What a Company"</h3>
                <p>That is what they all say about us</p>
              </div>
              <div className="column">
                <h3>"I shouldn't have gone with their competitor."</h3>
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
                <h4 className="ui inverted header">About</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item">Sitemap</a>
                  <a href="#" className="item">Contact Us</a>
                  <a href="#" className="item">Religious Ceremonies</a>
                  <a href="#" className="item">Gazebo Plans</a>
                </div>
              </div>
              <div className="three wide column">
                <h4 className="ui inverted header">Services</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item">Banana Pre-Order</a>
                  <a href="#" className="item">DNA FAQ</a>
                  <a href="#" className="item">How To Access</a>
                  <a href="#" className="item">Favorite X-Men</a>
                </div>
              </div>
              <div className="seven wide column">
                <h4 className="ui inverted header">Footer Header</h4>
                <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

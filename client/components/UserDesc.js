import React, {Component} from 'react'
import { connect } from 'react-redux'

class UserDesc extends Component {
    constructor() {
        super()
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (event) {

    }

    render() {
        return (
            <div>
            <div className="ui middle aligned center aligned very padded grid">
              <div className="column">
                <h2 className="ui image header">
                    <div className="content">Sign Up for a New Account</div>
                </h2>
                <form onSubmit={this.handleSubmit} name={name} className="ui large form">
                  <div className="ui equal width form">
    
                    <div className="fields">
                      <div className="field">
                        <label>Email</label>
                        <input name="email" type="text" placeholder="email" required></input>
                      </div>
                      <div className="field">
                        <label>Password</label>
                        <input name="password" type="password" placeholder="Password" required></input>
                      </div>
                    </div>
    
                    <div className="fields">
                      <div className="field">
                        <label>First name</label>
                        <input name="firstName" type="text" placeholder="First Name" required></input>
                      </div>
                      <div className="field">
                        <label>Last name</label>
                        <input name="lastName" type="text" placeholder="Last Name" required></input>
                      </div>
                    </div>
    
                    <div className="fields">
                      <div className="field">
                        <label>Address</label>
                        <input name="address" type="text" placeholder="Address"></input>
                      </div>
                    </div>
    
                    <div className="fields">
                      <div className="field">
                        <label>Phone</label>
                        <input name="phone" type="text" placeholder="Phone"></input>
                      </div>
                    </div>
    
                    <div className="fields">
                      <div className="field">
                        <label>Image URL</label>
                        <input name="image" type="url" placeholder="Image URL"></input>
                      </div>
                    </div>
    
                    <button
                      type="submit"
                      className="ui padding fluid large teal submit button"
                      style={{marginBottom: '10px'}}
                    >
                      {displayName}
                    </button>
                  </div>
      
    
                </form>
              </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => ({
  allUsers: state.allUsers
})

export default connect(mapStateToProps)(UserDesc)
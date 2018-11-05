import React from 'react'
import {Link} from 'react-router-dom'

function paymentSuccessful(props) {
  return (
    <div>
      <div className="payment">
        <h1>Thank you for your payment!</h1>
        <h4>
          <Link to="/home">Return to Home</Link>
        </h4>
      </div>
    </div>
  )
}
export default paymentSuccessful

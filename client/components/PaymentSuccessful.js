import React from 'react'
import {Link} from 'react-router-dom'

function paymentSuccessful(props) {
  return (
    <div>
      <div>
        <h1>Thank you for your payment!</h1>
      </div>
      <Link to="/home">Return to Home</Link>
    </div>
  )
}
export default paymentSuccessful

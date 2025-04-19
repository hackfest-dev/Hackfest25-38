import React from 'react'
import './Order.css'

function Order() {
  return (
    <div className='order'>
        <div className='order-container'>
            <div className='order-image'>
               
            </div>
            <div className='order-description'>
                <h2>Name : sugar cane</h2>
                <p>Your order has been placed successfully. Thank you for your purchase!</p>
                <p>We will notify you once your order is shipped.</p>
            </div>
        </div>
    </div>
  )
}

export default Order
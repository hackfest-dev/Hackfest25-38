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
                <p>description : sugar cane waste</p>
                <p>price :15 </p>
                <p>Quantity :5 </p>
                <p>Address : Uppunda</p>
                <p>Pincode : 5</p>
                <p>Phone no : 1234567890</p>
            </div>
        </div>
    </div>
  )
}

export default Order
import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import {userState, useEffect} from 'react';
function Orderdetails() {
  const [orderDetails, setOrderDetails] = useState(null);
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
        setOrderDetails(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, []);
  return (
    <>
    <div>Orderdetails</div>
    <div>
      {orderDetails ? (
        <div>
          <h2>Order Details</h2>
          <p>Order ID: {orderDetails.buyerId}</p>
          <p>Address:{orderDetails. deliveryAddress}</p>
          <p>Order Status: {orderDetails.status}</p>
          <p>Order image:{}</p>
          <h3>Order Items:</h3>
          <ul>
            {orderDetails.orderItems.map((item, index) => (
              <li key={index}>
                <p>Item ID: {item.itemId}</p>
                <p>Item Name: {item.itemName}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
    </>
  )
}

export default Orderdetails
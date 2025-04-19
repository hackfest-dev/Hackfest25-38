import React, { useEffect, useState } from 'react';

function Orderdetails() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orderId = localStorage.getItem('orderId');
        const response = await fetch(`http://localhost:3001/api/orderdetails/${orderId}`);
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      {product ? (
        <div>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Address:</strong> {product.address}</p>
          <p><strong>Pincode:</strong> {product.pincode}</p>
          <p><strong>Phone Number:</strong> {product.phoneno}</p>
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
}

export default Orderdetails;

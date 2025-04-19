import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Card=({productImage,productName,productDescription,productPrice,productQuantity})=>
{
    const navigate = useNavigate();

    const Buywaste = async () => {
        const data = {
          name: productName,
          description: productDescription,
          price: productPrice,
          quantity: productQuantity,
          image: productImage,
        };
      
        try {
          const res = await axios.post('http://localhost:3001/api/address', data);
          console.log('Posted successfully:', res.data);
          alert('Order placed!');
          navigate('/address');
        } catch (err) {
          console.error('Error posting data:', err);
          alert('Failed to post data');
        }
      };
    return(
    <div className='card-container'>
            <image>
                <img src={productImage} alt="img" />
            </image>
            <description>
                <h2> <b>Name :</b>{productName}</h2>
                <p><b>Description :</b>{productDescription}</p>
                <p><b>Price :</b>{productPrice}</p>
                <p><b>Quantity :</b>{productQuantity}</p>
                <button className='button' onClick={Buywaste}>Buy</button>
            </description>
    </div>
    );
};

export default Card
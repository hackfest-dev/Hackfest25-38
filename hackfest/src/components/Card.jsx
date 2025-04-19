import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'
const Card=({productImage,productName,productDescription,productPrice,productQuantity})=>
{
    const navigate = useNavigate();

    const Buywaste=(e)=>{
        navigate('/address');
    }
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
                <button onClick={Buywaste}>Buy</button>
            </description>
    </div>
    );
};

export default Card
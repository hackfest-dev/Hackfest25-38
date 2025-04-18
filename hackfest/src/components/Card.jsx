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
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <p>{productPrice}</p>
                <p>{productQuantity}</p>
                <button onClick={Buywaste}>Buy</button>
            </description>
    </div>
    );
};

export default Card
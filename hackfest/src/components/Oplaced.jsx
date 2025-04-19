import React from "react";
import './Oplaced.css'
import { useNavigate } from "react-router-dom";

function Oplaced() {

    const navigate = useNavigate();

    const home = (e) => {
        navigate('/home2');
    }
    const order = (e) => {
        navigate('/order');
    }

    return(
        <div className="oplaced">
            <div className="oplaced-container">
                <h1>Your order has been placed successfully!</h1>
                <h2>Thank you for your purchase!</h2>
                <p>We will notify you once your order has been shipped.</p>
                <button className="btn" onClick={home}>Go to home</button>
                <button className="btn" onClick={order}>View order details</button>
            </div>
        </div>
    )
}

export default Oplaced;
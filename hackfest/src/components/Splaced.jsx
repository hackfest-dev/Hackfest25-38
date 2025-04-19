import React from 'react'
import './Splaced.css' ;
import { useNavigate } from "react-router-dom";

function Splaced() {
    const navigate = useNavigate();

    const home = (e) => {
        navigate('/home1');
    }
    
  return (
    <div className="splaced">
        <div className="oplaced-container">
            <h1>Your request has been placed successfully!</h1>
            <h2>Thank you for selling</h2>
            <p>We will notify you once the buyer had once ordered</p>
            <button className="btn" onClick={home}>Go to home</button>
    
        </div>
    </div>
  )
}

export default Splaced;
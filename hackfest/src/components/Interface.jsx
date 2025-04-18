import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Interface.css'

function Interface() {

    const Navigate = useNavigate()

    const farmer = () => {
        Navigate('/home1')
    }

    const buyer = () => {
        Navigate('/home2')
    }

  return (
    <div className='container'>
        <h1>Please select the option</h1>
        <div className='options'>
            <button onClick={farmer}>Farmer</button>
            <button onClick={buyer}>Buyer</button>
        </div>
    </div>
  )
}

export default Interface
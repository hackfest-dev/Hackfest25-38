import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar2() {
  return (
    <>
        <nav>
            <div className="logo">
                <h1>Agrigo</h1>
            </div>
            <div className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/buywaste">Buy waste</NavLink></li>
                <li><NavLink to="/orderdetails">Order details</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </div>
            <div className='profile'>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </div>
        </nav>
    </>
  )
}

export default Navbar2
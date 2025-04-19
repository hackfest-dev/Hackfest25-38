import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import Home1 from './components/Home1'
import About from './components/About'
import Navbar2 from './components/Navbar2';
import Home2 from './components/Home2'
import Interface from './components/Interface';
import SellWaste from './components/SellWaste';
import Login from './components/Login'
import Register from './components/Register'
import Buywaste from './components/Buywaste';
import Profile from './components/Profile'
import Address from './components/Address'
import Oplaced from './components/Oplaced';
import Orderdetails from './components/Orderdetails';
import Splaced from './components/Splaced';

function App() {
  const router = createBrowserRouter([
    {
      path: "/home1",
      element: <><Navbar/><Home1/><Footer/></>,
    },
    {
      path: "/about",
      element: <><Navbar/><About/><Footer/></>,
    },
    {
      path: "/home2",
      element: <><Navbar2/><Home2/><Footer/></>,
    },
    {
      path: "/interface",
      element: <><Interface/></>,
    },
    {
      path: "/sellwaste",
      element: <><Navbar/><SellWaste/><Footer/></>,
    },
    {
      path: "/buywaste",
      element: <><Navbar2/><Buywaste/><Footer/></>,
    },
    {
      path: "/card",
      element: <><Card/></>,
    },
    {
      path: "/",
      element: <><Login/></>,
    },
    {
      path: "/register",
      element: <><Register/></>,
    },
    {
      path: "/profile",
      element: <><Navbar/><Profile/><Footer/></>,
    },
    {
      path: "/address",
      element: <><Navbar2/><Address/></>,
    },
    {
      path: "/oplaced",
      element: <><Navbar2/><Oplaced/></>,
    },
    {
      path: "/orderdetails",
      element: <><Navbar2/><Orderdetails/></>,
    },
    {
      path: "/splaced",
      element: <><Navbar2/><Splaced/></>,
    
    }
  ])
  {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
}
export default App

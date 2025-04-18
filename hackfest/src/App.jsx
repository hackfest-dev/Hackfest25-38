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

function App() {
  const router = createBrowserRouter([
    {
      path: "/home1",
      element: <><Navbar/><Home1/></>,
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>,
    },
    {
      path: "/home2",
      element: <><Navbar2/><Home2/></>,
    },
    {
      path: "/",
      element: <><Interface/></>,
    },
    {
      path: "/sellwaste",
      element: <><Navbar/><SellWaste/></>,
    },
    {
      path: "/card",
      element: <><Card/></>,
    },
    {
      path: "/footer",
      element: <><Footer/></>,
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

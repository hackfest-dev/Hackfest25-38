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
      path: "/",
      element: <><Interface/></>,
    },
    {
      path: "/sellwaste",
      element: <><Navbar/><SellWaste/><Footer/></>,
    },
    {
      path: "/card",
      element: <><Card/></>,
    },
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

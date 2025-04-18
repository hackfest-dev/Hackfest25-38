import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar'
import Home1 from './components/Home1'
import About from './components/About'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/></>,
    },
    {
      path: "/home1",
      element: <><Navbar/><Home1/></>,
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>,
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

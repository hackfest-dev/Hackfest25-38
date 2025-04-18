import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar'
import Home1 from './components/Home1'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/></>,
    },
    {
      path: "/home",
      element: <><Navbar/><Home1/></>,
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

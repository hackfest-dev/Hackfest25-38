import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/></>,
    },
    {
      path: "/home1",
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

import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/></>,
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

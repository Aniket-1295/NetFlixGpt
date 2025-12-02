import React from 'react'
import Browse from './Browse'
import Login from './Login'
import Home from './Home'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'


const Body = () => {

  const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<Home />,

   },
   {
    path:"/login",
    element:<Login />

   },
   {
    path:"/browse",
    element:<Browse />

   }
])


  return (
    <>

        <RouterProvider router ={appRouter} />
        
        
    </>
  )
}

export default Body
import React from 'react'
import Browse from './Browse'
import Login from './Login'
import Home from './Home'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import {  onAuthStateChanged } from "firebase/auth";

import { useEffect } from "react";


import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/slices/userSlice";
import {auth} from "../utils/firebase.config"


const Body = () => {

  const dispatch = useDispatch();

   //The recommended way to get the current user is by setting an observer on the Auth object:
  //firebase provide a onAuthStateChanged method that lets you listen for changes in the user's authentication state. 
  //whenever the user gets signed in or sign Up  or signed out, onAuthStateChanged function will be called.
  //it will return userData or null
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
  
        
  
       
      } else {
        // User is signed out
        // ...
  
        dispatch(removeUser());
  
  
      }
    });

  },[])

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
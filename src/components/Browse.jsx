import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';


const Browse = () => {

  //get the user from the redux store

  const user = useSelector((store)=> store.user);
  // console.log(user);
  return (
    <>
    <div className='h-screen flex justify-between'>
      <Header />
      <div className='flex gap-5'>
      <img 
      className='w-25 h-25 rounded-full z-20'
      src={user?.photoURL} alt="user Photo" />

      <button className='bg-red-600 p-2 rounded-lg h-10 my-5 text-bold text-white mr-10 cursor-pointer'>Logout</button>
      </div>
      




    </div>
    </>
  )
}

export default Browse
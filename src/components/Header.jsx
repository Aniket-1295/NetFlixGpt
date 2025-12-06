import React from 'react'
import Logo from './Logo'
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase.config';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login");
      
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });

  }

  //get the user from the redux store

  const user = useSelector((store)=> store.user);
  return (
    <div className='flex justify-between   '>
      <div className='flex  gap-5 '>
      <Logo />

      {
        user && 
        <div className='fixed top-0 right-0 flex gap-5 z-20'>
          <img 
          className='w-25 h-25 rounded-full z-20'
          src={user?.photoURL} alt="user Photo" />

          <button 
          onClick={handleLogOut}
          className='bg-red-600 p-2 rounded-lg h-10 my-5 text-bold text-white mr-10 cursor-pointer z-20'>Logout</button>
        </div>
     
      }

      

    </div>
    </div>
  )
}

export default Header
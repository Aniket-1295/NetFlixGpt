import React from 'react'
import { LOGO_URL } from '../utils/constant'

const Logo = () => {
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 ">
        <img
        className='w-44 mx-auto md:mx-0'
         src={LOGO_URL} alt="Logo Netflix" />
    </div>
  )
}

export default Logo
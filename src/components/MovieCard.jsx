import React from 'react';
import{ IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({path}) => {
  return (
    <div className="w-36 md:w-48 pr-4  ">
        <img 
        className='w-full h-full'
        src={IMG_CDN_URL+path}
        alt='Movie card' 
         />
    </div>
  )
}

export default MovieCard
import React from 'react';
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';
import { BG_URL } from '../utils/constant';

const GptSearchPage = () => {
  return (
    <div className='flex flex-col  text-center justify-center'>

        <div className="absolute h-screen w-screen ">
        <img className="  object-cover" src={BG_URL} alt="Background" />
        </div>

        <GptSearchBar />
        <GptMovieSuggestion />



    </div>
  )
}

export default GptSearchPage
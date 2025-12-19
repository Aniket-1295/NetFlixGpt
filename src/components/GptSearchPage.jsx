import React from 'react';
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';
import { BG_URL } from '../utils/constant';

const GptSearchPage = () => {
  return (

    <>
    {/* <div className='flex flex-col  text-center justify-center'> */}

<div className="fixed -z-10">
<img className="h-screen w-screen object-cover"  src={BG_URL} alt="Background" />
</div>

<GptSearchBar />
<GptMovieSuggestion />



{/* </div> */}
    </>

    
  )
}

export default GptSearchPage
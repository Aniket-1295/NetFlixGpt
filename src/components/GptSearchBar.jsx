import React from 'react';
import { languages } from   '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

    const language = useSelector((store) => store.config.lang);
    console.log("language", language);
  return (
    <div className=' z-50  justify-center my-[10%]'>
        <form >
            <input
            className=' z-50  w-1/3 text-white p-4 border border-gray-300 rounded-l-lg font-bold'
             type="text"  placeholder={languages[language]['what Would you like to watch today']} name='search' />

             <button className='bg-red-600 text-white p-4 rounded-r-lg mx-1 cursor-pointer'>{languages[language].search}</button>

        </form>
    </div>
  )
}

export default GptSearchBar
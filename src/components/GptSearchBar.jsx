import React from "react";
import { languages } from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { API_OPTIPONS } from "../utils/constant";
import { addGptSearchResults } from "../utils/slices/gptSlice";
import { useDispatch } from "react-redux";

// import openai from '../utils/openai';

import genAI from "../utils/geminiai";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMoviTMDB = async (movieName) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&page=1`,
        API_OPTIPONS
      );

      const json = await response.json();

      return json.results;

      // console.log(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);

    const prompt = `
Return ONLY a valid JavaScript array of exactly 5 movie titles related to "${searchText.current.value}".

Rules:
- Output must be an array of strings
- Exactly 5 items
- No explanations
- No numbering
- No markdown
- No extra text
- Movie names only

Example output:
["Lust Stories", "Ragini MMS", "Golmaal", "PK", "Fandry"]
`;

    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [prompt],
    });
    // console.log(response.text);

    const rawText = response.text.trim();
    const moviesName = JSON.parse(rawText);

    // console.log(movies);

    // console.log(response.text[0]);

    //now map all the movies and pass the movie name to searchMoviTMDB

    const promiseArray = moviesName.map((moviename) => {
      return searchMoviTMDB(moviename);
    });

    const TmdbMoviesResult = await Promise.all(promiseArray);

    dispatch(
      addGptSearchResults({
        moviesName: moviesName,
        moviesResults: TmdbMoviesResult,
      })
    );

    // console.log(TmdbMoviesResult);

    // searchMoviTMDB(movies[0]);
  };


  const language = useSelector((store) => store.config.lang);
  // console.log("language", language);
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center text-white">
      <form 
       className="w-full md:w-1/2 bg-black/90 grid grid-cols-12"
      onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          // className=" z-50  w-1/1 text-white p-4 border border-gray-300 rounded-l-lg font-bold"
           className=" p-2 m-4 col-span-9 "
          type="text"
          placeholder={
            languages[language]["what Would you like to watch today"]
          }
          name="search"
        />

        <button
          onClick={handleGptSearchClick}
          // className="bg-red-600 text-white p-4 rounded-r-lg mx-1 cursor-pointer"
           className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer"
        >
          {languages[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

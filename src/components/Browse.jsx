import React from "react";
import Header from "./Header";
import { useGetNowPlayingMovies } from "../hooks/useGetNowPlayingMovies";
import { useGetPopularMovies } from "../hooks/useGetPopularMovies";
import { useGetTopRatedMovies } from "../hooks/useGetTopRatedMovies";
import { useGetUpcomingMovies } from "../hooks/useGetUpcomingMovies";

import MainVideoContainer from "./MainVideoContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {

  const showGptSearchpage = useSelector((store)=>store.gpt.showGptSearchPage)
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();

  return (
    <>
      
        <Header />
        {
          showGptSearchpage ?  <GptSearchPage /> : (
            <>
            <MainVideoContainer />
            <SecondaryContainer />
            </>
          )

        }
          
       
     
    </>
  );
};

export default Browse;

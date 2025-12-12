import React from "react";
import Header from "./Header";
import { useGetNowPlayingMovies } from "../hooks/useGetNowPlayingMovies";
import { useGetPopularMovies } from "../hooks/useGetPopularMovies";
import { useGetTopRatedMovies } from "../hooks/useGetTopRatedMovies";
import { useGetUpcomingMovies } from "../hooks/useGetUpcomingMovies";

import MainVideoContainer from "./MainVideoContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();

  return (
    <>
      
        <Header />
          <MainVideoContainer />
          <SecondaryContainer />
       
     
    </>
  );
};

export default Browse;

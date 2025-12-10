import React from "react";
import Header from "./Header";
import { useGetNowPlayingMovies } from "../hooks/useGetNowPlayingMovies";

import MainVideoContainer from "./MainVideoContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useGetNowPlayingMovies();
  return (
    <>
      
        <Header />
          <MainVideoContainer />
          <SecondaryContainer />
       
     
    </>
  );
};

export default Browse;

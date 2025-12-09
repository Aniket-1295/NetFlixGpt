import React from "react";
import Header from "./Header";
import { useGetNowPlayingMovies } from "../hooks/useGetNowPlayingMovies";

import MainVideoContainer from "./MainVideoContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useGetNowPlayingMovies();
  return (
    <>
      <div className="flex flex-col gap-60">
        <Header />
        <div>
          <MainVideoContainer />
          <SecondaryContainer />
        </div>
      </div>
    </>
  );
};

export default Browse;

import React from "react";
import Header from "./Header";
import { useGetNowPlayingMovies } from "../hooks/useGetNowPlayingMovies";

const Browse = () => {
  useGetNowPlayingMovies();
  return (
    <>
      <div className="h-screen flex justify-between">
        <Header />
      </div>
    </>
  );
};

export default Browse;

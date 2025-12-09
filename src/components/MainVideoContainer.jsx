import React from "react";
import { useSelector } from "react-redux";
import VideoBackround from "./VideoBackround";
import VideoTitle from "./VideoTitle";

const MainVideoContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  //do early return
  if (!movies) return ;

  // console.log("movies", movies);

  const mainMovie = movies?.[0];
//   console.log("mainMovie", mainMovie);

  const { title, overview,id } = mainMovie || {};

  return (
    <>
      <VideoBackround  movieId ={id} />
      <VideoTitle title={title} description={overview} />
    </>
  );
};

export default MainVideoContainer;

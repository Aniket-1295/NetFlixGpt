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
    <div className="pt-[30%] bg-black md:pt-0">
    <VideoTitle title={title} description={overview} />
    <VideoBackround  movieId ={id} />
    </div>
      
    </>
  );
};

export default MainVideoContainer;

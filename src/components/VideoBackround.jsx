import React from "react";

import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackround = ({ movieId }) => {
  //2nd way
  useMovieTrailer(movieId);

  //2nd way
  const videoKey = useSelector((store) => store.movie?.trailerVideo);

  return (
    <div className=" w-screen top-0">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${videoKey}?controls=0&autoplay=1&mute=1&loop=1&playlist=${videoKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackround;

import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ path }) => {
  if (!path) return null;
  return (
    <div className="relative w-44 md:w-60 lg:w-64 pr-5 flex-shrink-0">
      <div
        className="
        overflow-hidden rounded-lg
        aspect-[16/9]
        transform transition-all duration-300 ease-out
        hover:scale-110 hover:-translate-y-3
        hover:z-20
        shadow-lg hover:shadow-2xl
      "
      >
        <img
          className="w-full h-full object-cover"
          src={IMG_CDN_URL + path}
          alt="Movie card"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default MovieCard;

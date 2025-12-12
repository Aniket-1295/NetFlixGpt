import React from "react";
import MovieCard from "./MovieCard";

const MoviListCatagory = ({ title, movies }) => {
  // do early return
  if (!movies) return;

  const list = Array.isArray(movies)
    ? movies
    : Array.isArray(movies?.results)
    ? movies.results
    : [];

//   console.log(movies);

  return (
    <div>
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
        {list.map((movie) => (
          <MovieCard key={movie.id} path={movie.backdrop_path} />
        ))}
        </div>
       
      </div>
    </div>
  );
};

export default MoviListCatagory;

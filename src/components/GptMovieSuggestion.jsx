import React from "react";
import { useSelector } from "react-redux";
import MoviListCatagory from "./MoviListCatagory";

const GptMovieSuggestion = () => {
  const { moviesName, moviesResults } = useSelector((store) => store.gpt);

  //error handling
  if (!moviesName || !moviesResults) return;

  return (
    <div className="p-4 m-4 bg-black/90 text-white ">
      {/* <h1 className="text-2xl md:text-4xl font-bold">GPT Suggestion</h1> */}
      <div>
        {moviesName.map((movieName, index) => (
          <MoviListCatagory
          key={movieName}
          title={movieName}
          movies={moviesResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;

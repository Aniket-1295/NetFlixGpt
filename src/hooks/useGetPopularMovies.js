import { useEffect } from "react";
import { API_OPTIPONS, POPULAR_MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/slices/movieSlice";


const useGetPopularMovies = () => {
  const dispatch = useDispatch();

  const getThePopularMovies = async () => {
    try {
      const data = await fetch(POPULAR_MOVIES_URL, API_OPTIPONS);

      const json = await data.json();
      // console.log("json", json?.results);
      dispatch(addPopularMovies(json?.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getThePopularMovies();

    // console.log("what gong wrong!!")
  }, []);
};

export { useGetPopularMovies };

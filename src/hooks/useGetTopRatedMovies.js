import { useEffect } from "react";
import { API_OPTIPONS, TOP_RATED_MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/slices/movieSlice";


const useGetTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTheTopRatedMovies = async () => {
    try {
      const data = await fetch(TOP_RATED_MOVIES_URL, API_OPTIPONS);

      const json = await data.json();
      // console.log("json", json?.results);
      dispatch(addTopRatedMovies(json?.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTheTopRatedMovies();

    // console.log("what gong wrong!!")
  }, []);
};

export { useGetTopRatedMovies };

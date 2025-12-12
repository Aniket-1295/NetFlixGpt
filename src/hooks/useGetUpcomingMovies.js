import { useEffect } from "react";
import { API_OPTIPONS, UPCOMING_MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/slices/movieSlice";


const useGetUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getTheUpcomingMovies = async () => {
    try {
      const data = await fetch(UPCOMING_MOVIES_URL, API_OPTIPONS);

      const json = await data.json();
      // console.log("json", json?.results);
      dispatch(addUpcomingMovies(json?.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTheUpcomingMovies();

    // console.log("what gong wrong!!")
  }, []);
};

export { useGetUpcomingMovies };

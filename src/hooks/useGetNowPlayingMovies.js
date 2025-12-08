import { useEffect } from "react";
import { API_OPTIPONS, NOW_PLAYING_MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/slices/movieSlice";

//define the contract first
//what it takes as a input and what it does with that input and what it returns

//does mot take any input
//does not return anything
const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getTheNowPlayingMovies = async () => {
    try {
      const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIPONS);

      const json = await data.json();
      console.log("json", json?.results);
      dispatch(addNowPlayingMovies(json?.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTheNowPlayingMovies();

    // console.log("what gong wrong!!")
  }, []);
};

export { useGetNowPlayingMovies };

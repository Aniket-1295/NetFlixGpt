import { API_OPTIPONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/slices/movieSlice";


//define the constract first 
//what it takes as a input and what it does with that input and what it returns
//it takes movie id as a input
//make a api call to get the trailer video
//put the trailer video on redux store
//does not return anything
const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch()



useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIPONS
        );

        const json = await data.json();
        const filteredVideos = json?.results.filter((video) => {
          return video.type === "Trailer";
        });

        const trailer =
          filteredVideos.length !== 0 ? filteredVideos[0] : json.results[0];
          dispatch(addTrailerVideo(trailer?.key))

        // setVideoKey(trailer?.key);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, [movieId]);
 

};

export default useMovieTrailer;
import React from "react";
import { useEffect} from "react";
import { API_OPTIPONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/slices/movieSlice";


const VideoBackround = ({ movieId }) => {


  //2nd way
  const videoKey = useSelector((store) => store.movie?.trailerVideo)

  //2nd way
  const dispatch = useDispatch()



  //1 st way to get the video key
  // const [videoKey, setVideoKey] = useState("");


  
  // const getVideosFromMovieId = async () => {
  //   try {
  //     const data = await fetch(
  //       "https://api.themoviedb.org/3/movie/1180831/videos",
  //       API_OPTIPONS
  //     );

  //     const json = await data.json();
  //     // console.log("json", json?.results);

  //     const filteredVideos = json?.results.filter((video) => {
  //       return video.type === "Trailer";
  //     });

  //     // console.log("filteredVideos", filteredVideos);

  //     //what if more than one trailer handle the case

  //     // const trailer = filteredVideos[0];

  //     //what if there is no trailer as a type and what if more than one trailer handle the case

  //     const trailer =
  //       filteredVideos.length !== 0 ? filteredVideos[0] : json.results[0];

  //     setVideoKey(trailer?.key);

  //     // console.log("trailer", trailer.key);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //rather than th
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/1180831/videos",
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

  return (
    <div >
      <iframe 
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoKey}?controls=0&autoplay=1&mute=1&loop=1&playlist=${videoKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackround;

import React from "react";
import Header from "./Header";
import { useEffect } from "react";
import { API_OPTIPONS } from "../utils/constant";


const Browse = () => {

  const getTheNowPlayingMovies = async()=>{

    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIPONS)
  
      const json = await data.json()
      console.log("json",json?.results)
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(()=>{
    getTheNowPlayingMovies()

    console.log("what gong wrong!!")
  },[])


  return (
    <>
      <div className="h-screen flex justify-between">
        <Header />
      </div>
    </>
  );
};

export default Browse;

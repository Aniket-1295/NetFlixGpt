import React from 'react';
import MoviListCatagory from './MoviListCatagory';
import {useSelector} from 'react-redux'

const SecondaryContainer = () => {

  const moviesCatagory = useSelector((store)=>store.movie)

  // console.log(moviesCatagory?.nowPlayingMovies);


  return (
    <div  className="bg-black">

        <div className=" mt-0 md:-mt-40 pl-4 md:pl-12 relative z-20">
        <MoviListCatagory title="NowPlaying" movies={moviesCatagory.nowPlayingMovies} />
        <MoviListCatagory title="Popular" movies={moviesCatagory.popularMovies} />
        <MoviListCatagory title="Top Rated" movies={moviesCatagory.topRatedMovies} />
        <MoviListCatagory title="Upcoming" movies={moviesCatagory.upcomingMovies} />
        </div>


    </div>
  )
}

export default SecondaryContainer
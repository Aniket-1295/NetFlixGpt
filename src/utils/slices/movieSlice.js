import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:{},
        popularMovies:{},
        topRatedMovies:{},
        upcomingMovies:{},
        trailerVideo:{}
       
    },
    reducers:{

        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },

        addTrailerVideo:(state,action)=>{

            state.trailerVideo=action.payload

        },

        clearAll:(state)=>{
            return{
                ...state,
                nowPlayingMovies:{},
                popularMovies:{},
                topRatedMovies:{},
                upcomingMovies:{},
                trailerVideo:{}
            }
        }

}
}
)

export const {
    addNowPlayingMovies,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies,
    addTrailerVideo,
    clearAll
} = movieSlice.actions

export default movieSlice.reducer
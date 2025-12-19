import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearchPage:false,
        moviesName:null,
        moviesResults:null
    },
    reducers:{

        toggleGptSearchPageView:(state,action)=>{
            state.showGptSearchPage = action.payload
        },

        addGptSearchResults:(state,action)=>{
            state.moviesName = action.payload.moviesName
            state.moviesResults = action.payload.moviesResults
        }
      
    }
})

export const { toggleGptSearchPageView,addGptSearchResults } = gptSlice.actions;
export default gptSlice.reducer
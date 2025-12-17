import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearchPage:false
    },
    reducers:{

        toggleGptSearchPageView:(state)=>{
            state.showGptSearchPage = !state.showGptSearchPage
        }
      
    }
})

export const { toggleGptSearchPageView } = gptSlice.actions;
export default gptSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearchPage:false
    },
    reducers:{

        toggleGptSearchPageView:(state,action)=>{
            state.showGptSearchPage = action.payload
        }
      
    }
})

export const { toggleGptSearchPageView } = gptSlice.actions;
export default gptSlice.reducer
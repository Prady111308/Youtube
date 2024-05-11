import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:'video',
    initialState : {'videos':[]},
    reducers : {
        setVideos : (state,action)=>{
           state.videos = action.payload;
        //    console.log(action.payload);
        }
    }
})

export const {setVideos} = videoSlice.actions;
export default videoSlice.reducer;
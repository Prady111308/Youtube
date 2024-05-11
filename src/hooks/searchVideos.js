import { YOUTUBE_SEARCH_RESULT_API } from "../utils/constant";
export const searchVideos = async(search) =>{
        // console.log(search);
        const res = await fetch(YOUTUBE_SEARCH_RESULT_API+search);
        const data = await res.json();
        return data.items;

        // dispatch(setVideos(data.items));
        
        
      }  
   

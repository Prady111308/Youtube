import { useDispatch } from "react-redux";
import { YOUTUBE_VIDEOS_URL } from "../utils/constant"

export const fetchVideos = async()=>{
    // const dispatch = useDispatch();
    const res = await fetch(YOUTUBE_VIDEOS_URL);
    const data = res.json();
    
}
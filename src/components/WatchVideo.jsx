import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO } from "../utils/constant";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [video,setVideo] = useState();
  const [searchParam] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideo();
  }, []);

  const fetchVideo=async()=>{
    const res = await fetch(YOUTUBE_VIDEO+searchParam.get("v"))
    const data = await res.json();
    setVideo(data.items[0]);
    console.log(data.items[0]);

  }
  if(!video) return null

  return (
    <div className="text-left m-6 min-h-screen px-4">
        <div className="w-2/3">
        <iframe
        className="w-full rounded-lg"

        width="100%"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParam.get("v")+"?si=PdA6g8gtutQhVvex"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="font-bold my-1 text-lg">{video?.snippet?.title}</div>
        </div>
        <div className="w-1/3"></div>
      
    </div>
  );
};

export default WatchVideo;

import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../utils/videoSlice";

const VideosContainer = () => {
  const videos = useSelector((store)=> store.video.videos);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_URL);
    const data = await res.json();
    dispatch(setVideos(data.items))
    // console.log(data.items);
  };

  return videos ? (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
    <div className="flex flex-wrap py-4 justify-between ">
    { videos.map((video,index) => 
          <Link to= {"/watch?v="+video.id.videoId} key={video.id+"-"+index}><VideoCard  video={video}/> </Link>
          ) 
          }
    </div> 
  ) : (
    <div>
      <h1>Loading ... </h1>
    </div>
  );
};

export default VideosContainer;

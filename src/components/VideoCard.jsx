import React from 'react'

const VideoCard = ({video}) => {
  // console.log(video.snippet.thumbnails);
  return (
    <div className="m-2 w-64">
        <div className='rounded-md'>
            <img src={video.snippet.thumbnails.high.url} alt='video' className='rounded-md'/>
        </div>
        <div className='py-2 text-sm'>
            <h2 className='flex overflow-hidden'>{video.snippet.title}</h2>
            <h3 className='text-gray-500'>{video.snippet.channelTitle}</h3>
            
        </div>
    </div>
  )
}

export default VideoCard
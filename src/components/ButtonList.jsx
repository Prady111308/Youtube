import React, { useEffect, useRef,useState } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_RESULT_API } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setVideos } from '../utils/videoSlice';
import {searchVideos} from '../hooks/searchVideos.js';

const ButtonList = () => {


  const dispatch = useDispatch();

  const divRef = useRef(null);

  const[scrollAmount,setScrollAmount] = useState(0);
  const[showRightScrollBtn,setShowRightScrollBtn] = useState(false);
  const[showLeftScrollBtn,setShowLeftScrollBtn] = useState(false);

  const btnList = ["All","Music","Cricket","News","Gaming","Comdey","Cooking","Tech","Jukebox","Live","abc","xbg","shtgf","shycn","ajybc","abcd"]

  useEffect(()=>{handleScrolling(divRef.current)},[])


  const handleScrolling = (element,step) =>{
     element.scrollLeft += step;
     setScrollAmount(element.scrollLeft)

     const width = element.offsetWidth;
     const scrollWidth = element.scrollWidth;
    //  console.log(width,scrollWidth,scrollAmount);

     if(scrollAmount>0 && !showLeftScrollBtn)
       setShowLeftScrollBtn(true);
     else if (scrollAmount<=0 && showLeftScrollBtn)
       setShowLeftScrollBtn(false);

     if(width + scrollAmount +1 >= scrollWidth)
     {
       setShowRightScrollBtn(false);
     }
     else if(!showRightScrollBtn)
      setShowRightScrollBtn(true);
  }

  const handleButtonClick = async (search) =>{
    // console.log(search);
    // const res = await fetch(YOUTUBE_SEARCH_RESULT_API+search);
    // const data = await res.json();
    // dispatch(setVideos(data.items));

    const videos = await searchVideos(search);
    // console.log(videos);
    dispatch(setVideos(videos));
    
  }


  return (
    <div className='flex relative'>
     { showLeftScrollBtn && <div className="bg-gray-100/75 rounded-lg px-2  py-1 text-sm font-semibold cursor-pointer hover:bg-gray-300/80 mr-1" onClick={()=>handleScrolling(divRef.current,-50)}>▶️</div>}
     <div className="w-full flex overflow-hidden" ref={divRef}>{ btnList.map((btn)=><Button key={btn} name={btn} handleClick={handleButtonClick}/>)}</div> 
     { showRightScrollBtn && <div className="bg-gray-100/80 rounded-lg px-2 py-1 text-sm font-semibold cursor-pointer hover:bg-gray-300/80" onClick={()=>handleScrolling(divRef.current,50)}>◀️</div> }
    
    </div>
  )
}

export default ButtonList
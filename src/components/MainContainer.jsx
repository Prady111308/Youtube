import React from 'react'
import ButtonList from './ButtonList'
import VideosContainer from './VideosContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const width = useSelector((store)=> store.app.mainContainerWidth)
  
  return (
    <div className={`p-4 h-screen overflow-scroll ${width} relative`}>
        <ButtonList />
        <VideosContainer />

    </div>
  )
}

export default MainContainer
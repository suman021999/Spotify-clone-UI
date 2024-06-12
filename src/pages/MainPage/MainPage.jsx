import React from 'react'
import Sidebar from '../../components/Sidebar'
import Player from '../../components/Player'
import Display from '../Display'

const MainPage = () => {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="flex h-[90%]">
            <Sidebar/>
            <Display/>
        </div>
        <Player/>
        <audio preload='auto'></audio>
      </div>
    </>
  )
}

export default MainPage

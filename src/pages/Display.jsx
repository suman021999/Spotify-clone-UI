import React, { useEffect, useRef } from 'react'
import {Route,Routes, useLocation} from 'react-router-dom'
import DisplayHome from '../components/DisplayHome'
import DisplayAlbum from '../components/DisplayAlbum'
import { albumsData } from '../assets/assets'
const Display = () => {

  const displayRef=useRef()
  const location=useLocation()
  const isAlbum=location.pathname.includes("album")
  const albamId=isAlbum?location.pathname.slice(-1):""
  const bgColor=albumsData[Number(albamId)].bgColor
  useEffect(()=>{
      if(isAlbum){
        displayRef.current.style.background=`linear-gradient(${bgColor},#121212)`
      }
      else{
         displayRef.current.style.background=`#121212`
      }
  })
  return (
    <>
      <div ref={displayRef} className="px-6 m-2 mx-6 pt-4 rounded text-white bg-[#121212] overflow-auto lg:w-[75%] w-full lg:ml-0 ">
       <Routes>
       <Route path='/' element={<DisplayHome/>}/>
       <Route path='/album/:id' element={<DisplayAlbum/>}/>
       </Routes>
      </div>
    </>
  )
}

export default Display

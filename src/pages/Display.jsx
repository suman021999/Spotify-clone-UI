import React from 'react'
import {Route,Routes} from 'react-router-dom'
import DisplayHome from '../components/DisplayHome'
const Display = () => {
  return (
    <>
      <div className="px-6 m-2 mx-6 pt-4 rounded text-white bg-[#121212] overflow-auto lg:w-[75%] w-full lg:ml-0 ">
       <Routes>
       <Route path='/' element={<DisplayHome/>}/>
       </Routes>
      </div>
    </>
  )
}

export default Display

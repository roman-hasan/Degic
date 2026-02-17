import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'

const Video = ({heading, videoBanner}) => {
  const [showVideo, setShowVideo] = useState(false)
  
  return (
    <section className='bg-gray-50' >
      <div className='container mx-auto px-4 lg:py-32 py-24'>
      <h1  className="text-[clamp(1.8rem,4vw,3rem)] leading-tight font-bold text-gray-900 text-center"> {heading} </h1>
      <div className="relative max-w-5xl w-full mt-10 mx-auto">
       <img className="w-full" src={videoBanner} alt="" />
      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 cursor-pointer -translate-y-1/2 bg-black p-4 rounded-full shadow-lg hover:bg-red-500 transition duration-300">
        <FaPlay className='text-white text-lg' />
      </button>
    </div>
       
      </div>
    </section>
  )
}

export default Video
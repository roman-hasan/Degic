import React, { useEffect, useRef, useState } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'

const Slider = ({slides, CartoonImage, companyLogos}) => {
  
  const [current, setCurrent] = useState(0)
  const {paragraph, heading, miniLogo} = slides[current]

  const nextSlide = () =>{
     setCurrent(prev=>(
      prev === slides.length - 1 ? 0 : prev + 1
     ))
  }
  const prevSlide = () =>{
     setCurrent(prev=>(
      prev === 0 ? slides.length - 1 : prev - 1
     ))
  }
  return (
    <section className='container mx-auto px-4 lg:py-32 py-24'>
      <div className='gap-8 flex lg:flex-row flex-col justify-between items-start lg:items-center'>
        <div className='w-full flex lg:justify-center'>
          <div className='w-full max-w-xl space-y-3'>
            <div className='flex items-center gap-3'>
                <img src={miniLogo} alt="" />
                <span> Logo </span>
            </div>
            <h1 className="text-[clamp(1.8rem,4vw,3rem)] leading-tight font-semibold text-gray-900"> {heading} </h1>
            <p className='md:text-xl sm:text-lg leading-[1.4] text-[#000000]/50'> {paragraph} </p>
           <div className='flex gap-3 items-center mt-6'>
             <button className='bg-gray-200 p-3 text-slate-700 rounded-full cursor-pointer ' onClick={prevSlide}> <GrPrevious /> </button>
             <button className='bg-gray-200 p-3 text-slate-700 rounded-full cursor-pointer' onClick={nextSlide}> <GrNext /> </button>
           </div>
          </div>
        </div>
       <div className="w-full">
        <img
          className="w-full max-w-96 mx-auto object-cover"
          src={CartoonImage}
          alt=""
        />
       </div>
      </div>

      <div className="slider">
      <div className="slide-track">
        {companyLogos.map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`logo-${index}`} />
          </div>
        ))}
        {companyLogos.map((img, index) => (
          <div className="slide" key={`clone-${index}`}>
            <img src={img} alt={`logo-clone-${index}`} />
          </div>
        ))}
      </div>
    </div>
       
    </section>
  )
}

export default Slider
import React, { useEffect, useRef, useState } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'

const Slider = ({slides, CartoonImage, companyLogos}) => {
  
  const [current, setCurrent] = useState(0)
  const {paragraph, heading, miniLogo} = slides[current]
  
   const trackRef = useRef(null);

  useEffect(() => {

    if (trackRef.current) {
      trackRef.current.innerHTML += trackRef.current.innerHTML;
    }
  }, []);

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
    <section className='container mx-auto px-8 lg:py-28 py-24'>
      <div className='gap-8 flex lg:flex-row flex-col justify-between items-start lg:items-center'>
        <div className='w-full'>
          <div className='w-full max-w-xl'>
            <div className='flex items-center gap-3'>
                <img src={miniLogo} alt="" />
                <span> Logo </span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] my-3 leading-tight font-bold text-gray-900"> {heading} </h1>
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
       
      <div className="overflow-hidden w-full py-3">
      <div ref={trackRef} className="flex animate-marquee space-x-6 mt-8">
        {companyLogos.map((img, idx) => (
          <div key={idx} className="h-24 max-w-25 shrink-0 ">
            <img
              src={img}
              alt=""
              className="h-9 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>

    </section>
  )
}

export default Slider
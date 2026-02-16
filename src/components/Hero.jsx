import React from 'react'

const Hero = ({heading, paragraph, heroImage}) => {
  return (
    <section className='container mx-auto px-8 gap-7 min-h-[90svh] flex flex-col-reverse justify-center lg:flex-row lg:justify-between items-center'>
        <div className='w-full'>
          <div className='lg:max-w-xl w-full'>
          <h1 className="text-[clamp(2rem,4vw,4rem)] leading-tight font-bold text-gray-900"> {heading} </h1>
          <p className='md:text-xl sm:text-lg mt-4 leading-[1.4] text-[#000000]/50'> {paragraph} </p>
          <div className='font-medium flex mt-5 gap-x-4'>
             <button className='px-4 py-2.5 cursor-pointer rounded-md bg-indigo-500 text-white'>Get Started</button>
             <button className='px-4 py-2.5 cursor-pointer rounded-md bg-[#5F62E2]/15 text-indigo-500'>Learn More</button>
          </div>
        </div>
        </div>
        <div className="w-full">
        <img
          className="w-full max-w-xl mx-auto object-cover"
          src={heroImage}
          alt=""
        />
       </div>

    </section>
  )
}

export default Hero
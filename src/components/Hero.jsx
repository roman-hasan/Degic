import React from 'react'

const Hero = ({heading, paragraph, image}) => {
  console.log(image)
  return (
    <section className='container mx-auto px-4 gap-8 flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center my-24'>
        <div className='max-w-xl w-full'>
          <h1 className="text-[calc(2rem+2vw)] leading-tight font-bold text-gray-900"> {heading} </h1>
          <p className='md:text-xl text-lg mt-5 leading-[1.4] text-[#000000]/50'> {paragraph} </p>
          <div className='md:text-lg flex mt-5 gap-x-4'>
             <button className='px-4 py-2.5 cursor-pointer rounded-md bg-indigo-500 text-white'>Get Started</button>
             <button className='px-4 py-2.5 cursor-pointer rounded-md bg-[#5F62E2]/15 text-indigo-500'>Learn More</button>
          </div>
        </div>
        <div className='w-full lg:max-w-xl'>
            <img className='w-full max-w-xl' src={image} alt="" />
        </div>
    </section>
  )
}

export default Hero
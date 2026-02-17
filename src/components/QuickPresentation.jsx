import React from 'react'

const QuickPresentation = ({images, heading}) => {
  const {maskImage, illustrationImage} = images
  return (
    <section className='bg-[#5F62E2]'>
      <div className='container mx-auto px-4 flex '>
       <div className='w-full lg:mt-10 my-10 lg:my-0'>
         <div className='max-w-3xl w-full'>
         <h2 className='sm:text-[clamp(1.8rem,4vw,3rem)] text-2xl leading-tight text-white'> {heading} </h2>
           <div className='font-medium flex mt-5 gap-x-4'>
             <button className='px-4 py-2 cursor-pointer rounded-md bg-[#2AB691] text-white'>Get Started</button>
             <button className='px-4 py-2 cursor-pointer rounded-md bg-[#FFFFFF]/15 text-white border border-gray-300/30'>Learn More</button>
          </div>
        </div>
       </div>
       <div className='w-1/2 hidden lg:block'>
          <div class="relative group pt-8">
          <div class="absolute inset-0 bg-[#F1B000]/20 blur-2xl opacity-50 transition duration-500"></div>
          <img 
            src={illustrationImage} 
            class="relative w-full h-full object-cover max-w-96"
          />
        </div>
       </div>

      </div> 
    </section> 
  )
}

export default QuickPresentation
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


const Presentation = ({heading, paragraph, grid}) => {

  return (
    <section className='bg-gray-50'>
      <div className='container mx-auto px-4 flex xl:flex-row flex-col-reverse xl:gap-x-24 justify-between lg:py-32 py-24'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 xl:px-8 mt-12 xl:mt-0'>
              {
                grid.map((item,i)=>{
                  const {image, heading, paragraph} = item
                  return(
                      <div  key={i} className='flex space-y-2 hover:shadow-md transition rounded-md bg-white flex-col justify-center xl:p-8 p-10 items-center text-center'>
                        <div className='max-w-24 w-full'>
                          <img className='w-full' src={image} alt="" />
                        </div>
                        <h3 className='text-xl py-0.5 font-semibold'> {heading} </h3>
                        <p  className='leading-[1.4] text-[#000000]/50'> {paragraph} </p>
                      </div>
                  )
                })
              }  
          </div>
          <div className='flex flex-col'>
             <div>
               <h2 className="text-[clamp(1.8rem,4vw,3rem)] leading-tight font-bold text-gray-900"> {heading} </h2>
               <p  className='md:text-xl sm:text-lg my-4 leading-[1.4] text-[#000000]/50'> {paragraph} </p>
               <button className='px-4 py-2.5 font-medium cursor-pointer rounded-md bg-[#5F62E2]/15 text-indigo-500'> Explore All </button>
             </div>

             <div className='mt-auto'>
                  <span className=' text-gray-500 tracking-wider font-semibold inline-block mt-5 xl:mt-0'> Follow us: </span>
                  <div className='flex gap-3 mt-3'>
                       <a href="#" className='text-2xl bg-[#C4C4C4]/20 hover:text-indigo-400 hover:bg-[#5f62e2]/10 transition p-2.5 rounded-full text-[#12131A]/50'><FaFacebook/></a>
                       <a href="#" className='text-2xl bg-[#C4C4C4]/20 hover:text-indigo-400 hover:bg-[#5f62e2]/10 transition p-2.5 rounded-full text-[#12131A]/50'><FaInstagram /></a>
                       <a href="#" className='text-2xl bg-[#C4C4C4]/20 hover:text-indigo-400 hover:bg-[#5f62e2]/10 transition p-2.5 rounded-full text-[#12131A]/50'><FaTwitter /></a>
                  </div>
             </div>
          </div>
      </div>
    </section>
  )
}

export default Presentation
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Blogs = ({heading, paragraph, posts}) => {

  return (
    <section className='container mx-auto px-4 py-24'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div>
             <h1 className='sm:text-[clamp(1.8rem,4vw,3rem)] text-2xl font-medium leading-tight'> {heading} </h1>
             <p className='md:text-xl sm:text-lg mt-2 max-w-xl w-full leading-[1.4] text-[#000000]/50'> {paragraph} </p>
        </div>
       <div className=' mt-auto'>
        <button  className={`px-4 mt-4 md:mt-0 py-2.5 group cursor-pointer font-medium flex items-center gap-1.5 rounded-md text-indigo-500 bg-[#5F62E2]/15`}>
        Explore All <BsArrowRight className='text-lg font-medium mt-0.5 group-hover:translate-x-1 transition duration-300 ' />
       </button>
      </div>
        </div>
        <div className='grid lg:grid-cols-3 gap-10 mt-12'>
             {
                posts.map((post,ind)=>{
                  const {category, image, paragraph, heading} = post
                  return <div key={ind}>
                    <div className='bg-[#F7F7FA] flex items-center'>
                        <img className='w-full' src={image} alt="" />
                    </div>
                      <h1 className='my-2.5 font-medium xl:text-3xl text-2xl'> {heading} </h1>
                      <p className='mb-4 mt-3 text-[#000000]/50'> {paragraph} </p>
                      <span className='text-[#2AB691] text-sm bg-[#2AB691]/11 px-3 py-2 font-medium rounded my-2'> {category} </span>
                  </div>
                })
             }
        </div>
    </section>
  )
}

export default Blogs
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
const MoreWorks = ({blocks}) => {

  return (
    <section className='container mx-auto px-4 py-24'>
          <div>
               {
                  blocks.map((block, ind)=> {
                      const {image, heading, bullets, reverse} = block 
                    return <div key={ind}>
                         <div className={`flex lg:justify-between space-y-12 gap-8 flex-col ${ reverse ? "lg:flex-row-reverse mt-14 lg:mt-0" : "lg:flex-row" } `}>
                            <div className="w-full flex items-center justify-center">
                              <div className="max-w-lg">
                                <img className="w-full" src={image} alt="" />
                              </div>
                            </div>
                              <div className='w-full flex flex-col lg:items-center '>
                                 <div>
                                  <h2 className='text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight w-full lg:max-w-lg'> {heading} </h2>
                                   <ul className='mt-5'> 
                                      {
                                        bullets.map((bullet,ind)=>(
                                          <li className='md:text-xl sm:text-lg leading-[1.4] my-1 text-[#000000]/50 flex gap-2 items-center' key={ind} > <IoMdCheckmarkCircleOutline className='text-[#2AB691]' /> {bullet} </li>
                                        ))
                                      }
                                  </ul>
                                  <button  className={`px-4 py-2.5 group cursor-pointer flex items-center gap-1.5 rounded-md mt-4 ${reverse ? "bg-[#5F62E2]/15 text-indigo-500" : "text-white bg-indigo-500"} `}>
                                     Learn More <BsArrowRight className='text-lg font-medium mt-0.5 group-hover:translate-x-1 transition duration-300 ' />
                                  </button>
                                 </div>
                              </div>
                         </div>
                     </div>
                  } )
               }
          </div>
    </section>
  )
}

export default MoreWorks
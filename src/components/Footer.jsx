import React from 'react'
import footerLogo from "../assets/footerLogo.png"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const footerCategories = [
        {
            title: "Company",
            links: ["Become Affiliate", "Go Unlimited", "Services"]
        },
        {
            title: "Products",
            links: ["Design Systems", "Themes & Templates", "Mockups", "Presentations", "Wireframe Kits", "UI Kits"]
        },
        {
            title: "Support",
            links: ["License", "Refund Policy", "About Us", "Contacts"]
        },
        {
            title: "Resources",
            links: ["Business Stories", "Digital Store", "Learning", "Social Media"]
        }
    ]

    return (
        <footer className='bg-black'>
            <div className='container mx-auto px-4 py-20 text-white'>
              <div className='grid grid-cols-12 gap-6 md:gap-8'>
                <div className='mb-10 lg:col-span-3 col-span-12 w-full '>
                  <div className='lg:max-w-52 max-w-40 w-full'>
                    <img className='w-full' src={footerLogo} alt="Footer Logo" />
                  </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-14 w-full lg:col-span-9 col-span-12 m-auto'>
                    {footerCategories.map((category, ind) => {
                        const { title, links } = category;
                        return (
                            <div key={ind}>
                                <p className='md:text-xl text-lg font-medium mb-2.5'>{title}</p>
                                <ul className='space-y-2'>
                                    {links.map((link, idx) => (
                                        <li key={idx}>
                                            <a href="#" className='text-[#FFFFFF]/50 hover:text-gray-200 transition duration-300'>{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
              </div>
            </div>
              <div className='container m-auto pb-4 px-4'>
              <hr className='text-gray-700/50' />
              <div className='mt-4 flex gap-4 justify-center flex-wrap items-center sm:justify-between'>
                 <span className='text-[#FFFFFF]/50 font-medium'> Copyright Degic © 2026</span>
                 <div className='flex gap-3 mt-1'>
                       <a href="#" className='text-xl bg-[#FFFFFF]/15 transition p-2.5 rounded-full text-gray-300'><FaFacebook/></a>
                       <a href="#" className='text-xl bg-[#FFFFFF]/15 transition p-2.5 rounded-full text-gray-300'><FaInstagram /></a>
                       <a href="#" className='text-xl bg-[#FFFFFF]/15 transition p-2.5 rounded-full text-gray-300'><FaTwitter /></a>
                  </div>
              </div>
              </div>
        </footer>
    )
}

export default Footer

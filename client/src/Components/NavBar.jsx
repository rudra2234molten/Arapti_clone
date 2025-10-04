import React, { useState } from 'react'
import { assets } from './Assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import ButtonBlue from './ButtonBlue'

export const scocialLinks = [assets.facebookicon, assets.twittericon, assets.instagramicon, assets.youtubeicon, assets.pinteresticon]

const navLinks = [
  { label: ' Home ', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Properties', path: '/properties' },
  { label: 'News & Blogs', path: '/news-and-blogs' },
  { label: 'Career', path: '/career' },
  { label: 'Contact Us', path: '/contact-us' },
]

const NavBar = () => {
  const [navOn, setNavOn] = useState(false)
  const navigate = useNavigate()

  return (
    <header className='w-full h-12 md:h-auto sticky top-0 z-50 bg-white shadow-md' style={{ fontFamily: "Nunito, sans-serif" }}>
      <nav className='w-full h-full'>
        <div className='bg-black md:flex hidden justify-between  py-1.5 xl:px-20 px-5 w-full'>
          <aside className='flex gap-4 items-center text-xs text-[#F3F5FB]'>
            <h6 className='flex items-center gap-1'><img src={assets.mailicon} alt="mail-icon" />Example@example.com</h6>
            <h6 className='flex items-center'><img src={assets.locationicon} alt="location-icon" />Example@547 ns tower St. anglo City, USA</h6>
          </aside>
          <aside className='flex gap-2'>
            {
              scocialLinks.map((icon, index) => (
                <img key={index} src={icon} alt="scocial-icons" className='cursor-pointer' />
              ))
            }
          </aside>
        </div>
        <div className='flex h-full items-center justify-between w-full px-5 xl:px-20 py-2'>
          <aside className='md:w-[20%] w-[40%] h-full'>
            <img src={assets.logo} alt="logo" className='h-full object-contain w-[70%] cursor-pointer' onClick={() => navigate('/')} />
          </aside>
          <aside className={`flex pt-10 lg:pt-0 pb-5 lg:pb-0 flex-col lg:flex-row z-50 shadow-xl lg:shadow-none bg-white top-0  ${navOn ? 'right-0' : '-right-[100%]'} transition-all duration-500 ease-in-out xl:gap-8 lg:gap-5 lg:justify-between text-[#26232A] fixed lg:static w-[50%] h-full lg:h-auto lg:w-[80%] items-left lg:items-center`}>
            <div className='justify-end w-full flex px-5 lg:hidden'>
              <span className='text-4xl font-bold cursor-pointer' onClick={() => setNavOn(false)}>X</span>
            </div>
            <aside className='flex flex-col items-center lg:flex-row pl-5 lg:pl-0 w-[70%] xl:gap-8 gap-6'>
              {
                navLinks.map(({ label, path }, index) => (
                  <NavLink key={index} to={path} onClick={() => {
                    setNavOn(false)
                    window.scrollTo(0, 0)
                  }} className={({ isActive }) => `lg:text-sm md:text-lg text-sm xl:text-base transition-all duration-300 text-left w-full lg:w-fit border-b-2 lg:border-none border-b-gray-200-600 lg:shadow-none ${isActive ? 'text-blue-500 font-bold border-b-2 lg:border-none border-b-blue-600 shadow-xl lg:shadow-none' : 'text-[#1e1b4b]/70 font-medium hover:text-[#1e1b4b]'}`}>{label}</NavLink>
                ))
              }
            </aside>
            <aside className='md:w-[30%] w-full h-full flex flex-col mt-5 lg:mt-0 lg:flex-row items-start lg:items-center pl-5 lg:pl-0 justify-end gap-4'>
              <button className='flex text-sm xl:text-base gap-2 items-center text-[#5E5F63]'><img src={assets.loginicon} alt="login-icon" />Login</button>
              <ButtonBlue text='Add Listing' icon={assets.addicon} />
            </aside>
          </aside>
          <div className='lg:hidden flex flex-col gap-y-1' onClick={() => setNavOn(true)}>
            <div className='h-1 w-6 bg-black'></div>
            <div className='h-1 w-6 bg-black'></div>
            <div className='h-1 w-6 bg-black'></div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
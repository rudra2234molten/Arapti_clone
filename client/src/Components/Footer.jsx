import React from 'react'
import { assets } from './Assets/assets';
import { scocialLinks } from './NavBar';
import { Link } from 'react-router-dom';


const FooterLinkContainer = ({ labelData }) => {
  return (
    <div className='flex flex-1 flex-col items-left sm:items-start lg:gap-y-5 md:gap-y-3 gap-y-3'>
      {
        labelData.map((label, index) => <Link key={index} className={`${index === 0 ? 'font-bold text-lg' : 'text-[#B4B4B4] text-sm'} hover:text-blue-600 transition-all duration-300 w-fit`}>{label}</Link>)
      }
    </div>
  )
}

const servicesLabel = ['Services', 'Property on sale', 'Team membar', 'Offices for Buy', 'Terms of use', 'Offices for Rent']

const contactLabel = ['Contact', 'Help/FAQ', 'Propert owners', 'Contact Support', 'Pricing Plans', 'Partners']

const quickLinkLabel = ['Quick Links', 'About Us', 'Contact', 'Services Details', 'Add Listing', 'Property']

export const contactUsLabel = [
  { icon: '', label: 'Contact Us' },
  {
    icon: assets.footlocationicon, label: '86 Road Broklyn Street, 600 New York, USA'
  },
  { icon: assets.footermsgicon, label: 'Example@example.com' },
  { icon: assets.footercallicon, label: ': (+123) 456-7898' },
]

const Footer = () => {
  return (
    <section className='bg-[#1E2027] h-auto pt-10 w-full relative'>
      <aside className='bg-[#51BBFF] sm:h-[15rem] h-[10rem] w-[90%] flex sm:justify-between justify-center flex-col-reverse xl:px-20 px-5 py-10 items-center absolute sm:-top-[30%] -top-[8%] left-[5%] rounded-md bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${assets.footerMaskimg})` }}>
        <article className='text-white flex flex-col gap-y-3 w-full'>
          <h6 className='text-xs'>About Real Estate</h6>
          <h4 className='sm:text-2xl text-base font-semibold'>Consult with agents for listing</h4>
          <span className='text-sm sm:px-4 px-2 sm:py-2 py-1.5 cursor-pointer rounded-full border-white border w-fit'>Call Us - +91 8985 256 257</span>
        </article>
        <div className='h-[130%] absolute sm:right-[5%] sm:bottom-0 hidden sm:block sm:top-auto'>
          <img src={assets.footerCharacter} alt="character-img" className='sm:h-full h-44' />
        </div>
      </aside>
      <aside className='xl:px-20 px-5 gap-5 gap-y-10 sm:pt-32 pt-10 flex flex-col sm:flex-row justify-between text-white'>
        <div className='flex gap-y-3 flex-1 flex-col items-left sm:items-start md:gap-y-4'>
          <img src={assets.footerLogo} alt="logo" className='w-[15rem]' />
          <p className='text-[#B4B4B4] text-sm'>The world’s first and largest digital market
            for crypto collectibles and non-fungible
            (NFTs). Buy</p>
          <aside className='flex lg:gap-5 gap-2'>
            {
              scocialLinks.map((icon, index) => (
                <div key={index} className='lg:h-6 lg:w-6 h-5 w-5'><img src={icon} alt="scocial-icons" className='cursor-pointer h-full w-full' /></div>
              ))
            }
          </aside>
        </div>
        <FooterLinkContainer labelData={servicesLabel} />
        <FooterLinkContainer labelData={contactLabel} />
        <FooterLinkContainer labelData={quickLinkLabel} />
        <div className='flex flex-1 flex-col items-left sm:items-start lg:gap-y-5 md:gap-y-3 gap-y-3 pr-5 lg:pr-0'>
          {
            contactUsLabel.map(({ icon, label }, index) => <Link key={index} className={`${index === 0 ? 'font-bold text-lg' : 'text-[#B4B4B4] text-sm'} hover:text-blue-600 transition-all duration-300 flex items-center gap-2 w-fit`}>{icon && <img src={icon} alt="icon" />} {label}</Link>)
          }
        </div>
      </aside>
      <aside className='w-full border-t border-gray-700 mt-5'>
        <article className='flex w-full xl:px-20 px-5 justify-between gap-y-2 py-4 lg:text-sm text-xs flex-col sm:flex-row text-[#B4B4B4] md:items-center items-start'>
          <p>© 2024 ADYABHUMI. All Rights Reserved.</p>
          <p>Design & Developed by <span className='hover:text-blue-600 transition-all duration-300 cursor-pointer'>MOLTENX_OP</span></p>
        </article>
      </aside>
    </section>
  )
}

export default Footer
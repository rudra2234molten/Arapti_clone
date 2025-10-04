import React, { useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

const PropertyDetailsHero = ({ flatPhotos, fadein, prev, next }) => {

  // useEffect(() => {
  //   if (window.screen.width <= 768) {
  //     setInterval(next, 2000);
  //   }
  // }, [])

  return (
    <div className='w-full h-[60vh] flex gap-3 justify-end sm:items-center items-end relative shadow-md'>
      {
        flatPhotos?.map((img, index) => (
          <div key={index} className={`${index === 0 ? `${fadein} h-full w-full absolute brightness-75` : 'sm:w-[5rem] sm:h-[6rem] w-[4rem] h-[5rem] z-0  border-4 border-white'} rounded-md overflow-hidden`}>
            <img src={img} alt="flat-image" className='h-full w-full object-cover object-center' />
          </div>
        ))
      }
      <div className='flex absolute justify-end gap-4 items-center 2xl:right-[5%] sm:bottom-[20%] bottom-0 w-full'>
        <span onClick={prev} className='bg-white p-2 rounded-full text-lg hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer'><FaArrowLeft /></span>
        <span onClick={next} className='bg-white p-2 rounded-full text-lg hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer'><FaArrowRight /></span>
      </div>
    </div>
  )
}

export default PropertyDetailsHero
import React, { useEffect, useState } from 'react'
import { assets } from './Assets/assets'

const bannerHero = [assets.herobanner, assets.herobanner, assets.herobanner]

const HeroHome = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () => setCurrentIndex(current => current === 0 ? bannerHero.length - 1 : current - 1)
  const nextSlide = () => setCurrentIndex(current => current === bannerHero.length - 1 ? 0 : current + 1)

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <section className='w-full md:h-[80vh] h-auto relative'>
      <div className='w-full h-full overflow-x-hidden flex'>
        {bannerHero.map((banner, index) => (
          <aside className='w-full h-full cursor-pointer shrink-0 transition-transform ease-out duration-500' style={{ transform: `translateX(-${currentIndex * 100}%)` }} key={index}><img src={banner} alt="" className='h-full w-full md:object-fill object-contain object-center' /></aside>
        ))}
      </div>
      <div className='absolute top-[45%] flex justify-between items-center w-full md:px-10 px-2'>
        <span onClick={prevSlide} className='bg-white p-2 rounded-full hover:bg-blue-600 text-white cursor-pointer transition-all duration-300 group'><img src={assets.leftarrow} alt="prev-icon" className=' group-hover:invert' /></span>
        <span onClick={nextSlide} className='bg-white p-2 rounded-full hover:bg-blue-600 text-white cursor-pointer transition-all duration-300 group'><img src={assets.leftarrow} alt="next-icon" className='rotate-180 group-hover:invert' /></span>
      </div>
    </section>
  )
}

export default HeroHome
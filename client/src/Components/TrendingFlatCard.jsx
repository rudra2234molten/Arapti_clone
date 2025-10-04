import React from 'react'
import { assets } from './Assets/assets'
import { Link } from 'react-router-dom'

const TrendingFlatCard = ({ id, index, img, name, price, bathroom, bedroom, squarfeet, location }) => {
  return (
    <Link to={`/flat/${id}`} className='flex items-center w-full flex-col sm:flex-row gap-5 p-3 bg-white rounded-lg shadow-md text-[#26232A] hover:cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-all duration-500'>
      <div className='h-52 lg:h-48 lg:w-52 md:h-52 md:w-[50%] w-full shrink-0 xl:w-60  rounded-lg overflow-hidden relative'>
        <img src={img} alt={`trending-img${index}`} className='h-full w-full object-cover object-center' />
        <span className='px-3 py-1.5 bg-white rounded-full absolute top-5 left-3 text-xs'>For sale</span>
        <img src={assets.profileimg} alt="profile-png" className='absolute bottom-5 left-3 h-10 w-10' />
      </div>
      <article className='flex flex-col justify-between h-full w-full'>
        <div className='flex items-end justify-between w-full'>
          <div>
            <h1 className='text-xl xl:text-2xl md:text-2xl lg:text-xl font-semibold xl:mb-4 mb-2'>{name}</h1>
            <h1 className='text-[#0B68F2] font-bold xl:text-2xl text-xl lg:text-xl md:text-2xl'>{price}</h1>
          </div>
          <span className='xl:p-3 p-1.5 rounded-full border cursor-pointer'><img src={assets.hearticon} alt="heart-icon" /></span>
        </div>
        <div className='flex items-center text-[#5E5F63] xl:text-sm lg:text-xs text-xs md:text-sm divide-x-2 border-b-2 pb-2 pr-5'>
          <aside className='flex-1 pr-2'>
            <span className='flex gap-2'>{bedroom} <img src={assets.bedicon} alt="bedicon" /></span>
            <h1>Bedrooms</h1>
          </aside>
          <aside className='flex-1 px-3'>
            <span className='flex gap-2'>{bathroom} <img src={assets.bathtubicon} alt="bethtubicon" /></span>
            <h1>Bathrooms</h1>
          </aside>
          <aside className='flex-1 px-3'>
            <span className='flex gap-2'>{squarfeet} <img src={assets.scaleicon} alt="scaleicon" /></span>
            <h1>Square Ft</h1>
          </aside>
        </div>
        <h1 className='flex xl:text-sm text-xs gap-2 p-1 items-center text-[#5E5F63]'><img src={assets.bluelocationicon} alt="locationicon" />{location}</h1>
      </article>
    </Link>
  )
}

export default TrendingFlatCard
import React from 'react'
import { assets } from './Assets/assets'
import { Link } from 'react-router-dom'

const LandCard = ({ id, img, index, name, location, squarft }) => {
  return (
    <div key={index} className='bg-white rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-[1.01]'>
      <div>
        <img src={img} alt={`land-img${index}`} />
      </div>
      <article className='sm:p-5 p-2 flex flex-col gap-y-2'>
        <h1 className='font-bold sm:text-xl text-lg'>{name}</h1>
        <h4 className='flex items-center gap-3 text-[#5E5F63] text-xs'><img src={assets.bluelocationicon} alt="" />{location}</h4>
        <h4 className='flex items-center gap-3 text-[#5E5F63] text-xs'><img src={assets.bluescale} alt="" /><span className='text-black font-semibold'>{squarft}</span> Square Ft</h4>
      </article>
    </div>
  )
}

export default LandCard
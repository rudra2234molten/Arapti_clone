import React from 'react'
import { assets } from './Assets/assets'

const LocationCard = ({ img, location, numberOfProperties }) => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className='snap-center bg-cover bg-center bg-no-repeat xl:w-60 xl:h-80 sm:w-56 sm:h-72 h-64 w-full rounded-lg overflow-hidden cursor-pointer shrink-0'>
      <aside className='text-white flex items-start justify-end h-full w-full bg-gradient-to-t from-black to-transparent p-5 flex-col gap-y-2'>
        <h1 className='text-xl font-semibold'>{location}</h1>
        <h6 className='text-xs flex items-center gap-2'>{numberOfProperties} <img src={assets.leftarrow} alt="" className='rotate-[130deg]' /></h6>
      </aside>
    </div>
  )
}

export default LocationCard
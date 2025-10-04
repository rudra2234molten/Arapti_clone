import React from 'react'
import { FaHeart } from 'react-icons/fa6'
import { GiSkippingRope } from 'react-icons/gi'
import { IoMdAddCircleOutline, IoMdShare } from 'react-icons/io'
import { SlCalender } from 'react-icons/sl'

const PropertyDetailsSec1 = () => {
  return (
    <article className='flex items-center w-full justify-between'>
      <div className='flex items-center gap-5 text-xs flex-wrap'>
        <button className='px-3 py-1 bg-red-500 text-white rounded-md'>Featured</button>
        <button className='px-3 py-1 bg-white shadow-md rounded-md'>For sale</button>
        <h6 className='flex gap-1  items-center'><span className='text-red-500 text-lg'><SlCalender /></span>2 years ago</h6>
        <h6 className='flex gap-1 items-center'><span className='text-red-500 text-lg'><GiSkippingRope /></span>7652 views</h6>
      </div>
      <div className='flex items-center gap-2'>
        <span className='p-2 rounded-md cursor-pointer text-red-500 bg-gray-200'><FaHeart /></span>
        <span className='p-2 rounded-md cursor-pointer bg-gray-200'><IoMdShare /></span>
        <span className='p-2 rounded-md cursor-pointer bg-gray-200'><IoMdAddCircleOutline /></span>
      </div>
    </article>
  )
}

export default PropertyDetailsSec1
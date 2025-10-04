import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import PropertyDetailsHeading from './PropertyDetailsHeading'

const PropertyDetailsSec2 = ({ heading, price, location }) => {
  return (
    <div className='flex flex-col gap-y-2 text-sm text-gray-700'>
      <PropertyDetailsHeading title={heading} />
      <div className='flex justify-between'>
        <h6 className='font-bold flex gap-2 items-center'><span className='text-red-600'>{price}</span><del>$16000</del></h6>
        <h6>Property Id: <span>HZ24</span></h6>
      </div>
      <h6 className='flex items-center gap-1 font-semibold'><span className='text-red-600'><FaLocationDot /></span>{location}</h6>
    </div>
  )
}

export default PropertyDetailsSec2
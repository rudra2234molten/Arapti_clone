import React from 'react'

const PropertyDetailsHeading = ({ title }) => {
  return (
    <h5 style={{ textShadow: '0px 1px 2px #26232A' }} className='lg:text-3xl md:text-2xl text-xl font-bold border-l-2 border-red-600 px-4 my-5 text-[#26232A] capitalize'>{title}</h5>
  )
}

export default PropertyDetailsHeading
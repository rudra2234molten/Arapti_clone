import React from 'react'
import PropertyDetailsHeading from './PropertyDetailsHeading'

const PropertyDetailsLocation = ({ locationLabel }) => {
  return (
    <aside>
      <PropertyDetailsHeading title='Location & Google Maps' />
      <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-x-5 gap-y-5'>
        {
          locationLabel.map(({ label, data }, index) => (
            <h1 key={index} className='flex justify-between items-center text-gray-600 text-sm'><span className='text-gray-900 font-bold text-balance'>{label}</span><span>{data}</span></h1>
          ))
        }
      </div>
    </aside>
  )
}

export default PropertyDetailsLocation
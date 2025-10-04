import { FaCheck } from 'react-icons/fa6'
import PropertyDetailsHeading from './PropertyDetailsHeading'

const PropertyDetailsAmenities = ({ amenitiesLabel }) => {
  return (
    <aside>
      <PropertyDetailsHeading title='Properties Amenities' />
      <div className='grid md:grid-cols-3 grid-cols-1 w-full gap-y-2'>
        {
          amenitiesLabel.map((label, index) => (
            <h1 key={index} className='flex items-center gap-3 text-gray-700 font-light text-sm capitalize'><span className='text-red-600'><FaCheck /></span>{label}</h1>
          ))
        }
      </div>
    </aside>
  )
}

export default PropertyDetailsAmenities
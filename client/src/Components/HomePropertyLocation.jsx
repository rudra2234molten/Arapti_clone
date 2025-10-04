import React from 'react'
import Heading from './Heading'
import { assets } from './Assets/assets'
import LocationCard from './LocationCard'


const propertyLocationData = [
  { location: 'New York', numberOfProperties: '13 properties', img: assets.propertylocation1 },
  { location: 'New York', numberOfProperties: '13 properties', img: assets.propertylocation2 },
  { location: 'New York', numberOfProperties: '13 properties', img: assets.propertylocation1 },
  { location: 'New York', numberOfProperties: '13 properties', img: assets.propertylocation3 },
  { location: 'New York', numberOfProperties: '13 properties', img: assets.propertylocation4 },
  { location: 'New York', numberOfProperties: '13 properties', img: assets.propertylocation3 },
  { location: 'New York', numberOfProperties: '13 properties', img: assets.propertylocation5 },
  { location: 'New York', numberOfProperties: '13 properties', img: assets.propertylocation4 },
  { location: 'New York', numberOfProperties: '13 properties', img: assets.propertylocation5 },
]

const HomePropertyLocation = () => {
  return (
    <section className='py-10 bg-cover bg-bottom bg-no-repeat w-full' style={{ backgroundImage: `url(${assets.locationbgimg})` }}>
      <Heading title='Find Property by Location' subTitle='Real estate agency' postition='center' text='white' />
      <div className='flex gap-6 my-10 overflow-x-scroll scroll-smooth w-full sm:px-10 px-5 snap-mandatory snap-x'>
        {
          propertyLocationData.map(({ location, numberOfProperties, img }, index) => (
            <LocationCard key={index} img={img} location={location} numberOfProperties={numberOfProperties} />
          ))
        }
      </div>
    </section>
  )
}

export default HomePropertyLocation
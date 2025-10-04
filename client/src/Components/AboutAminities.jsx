import React from 'react'
import Heading2 from './Heading2'
import { assets1 } from './Assets/assets1'
import AminitiesCard from './AminitiesCard'

const aminitiesData = [
  {
    title: 'Parking Space', text: 'Enimad minim veniam quis no exercitation ullamco lab', icon: assets1.caricon
  },
  { title: 'Swimming Pool', text: 'Enimad minim veniam quis no exercitation ullamco lab', icon: assets1.stairsicon },
  { title: 'Privat Security', text: 'Enimad minim veniam quis no exercitation ullamco lab', icon: assets1.stairsicon },
  { title: 'Medical Center', text: 'Enimad minim veniam quis no exercitation ullamco lab', icon: assets1.shieldicon },
  { title: 'Library Area', text: 'Enimad minim veniam quis no exercitation ullamco lab', icon: assets1.stethoscopeicon },
  {
    title: 'King Size Beds', text: 'Enimad minim veniam quis no exercitation ullamco lab', icon: assets1.tajicon
  },
  {
    title: 'Smart Homes', text: 'Enimad minim veniam quis no exercitation ullamco lab', icon: assets1.houseicon
  },
  {
    title: 'Kid’s Playland', text: 'Enimad minim veniam quis no exercitation ullamco lab', icon: assets1.lighthouseicon
  },
]

const AboutAminities = () => {
  return (
    <section className='xl:px-20 px-5 my-10'>
      <Heading2 title='Property Amenities' text='Here are some common property amenities that can be highlighted for real estate listings or developments:' />
      <aside className='grid lg:grid-rows-2 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-5'>
        {
          aminitiesData.map(({ title, text, icon }, index) => (
            <AminitiesCard index={index} title={title} text={text} icon={icon} />
          ))
        }
      </aside>
    </section>
  )
}

export default AboutAminities
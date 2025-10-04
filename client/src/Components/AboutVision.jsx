import React from 'react'
import { assets1 } from './Assets/assets1'
import VisionCard from './VisionCard'

const visionData = [
  { title: 'Who we are', text: 'Our founders Dustin Moskovitz & Justin Rosenstein met leading Engineering teams at Facebook. As operations scaled, they grew frustrated by how difficult coordinate' },
  { title: 'Our Mission', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

const AboutVision = () => {
  return (
    <section className='w-full'>
      <div className='w-full xl:px-20 px-5 my-10 flex gap-5 justify-center items-end flex-col lg:flex-row'>
        <aside className='flex-1'>
          <img src={assets1.benefitsimg} alt="mission-img" className='w-full h-full' />
        </aside>
        <article className='flex flex-col gap-y-4 flex-1'>
          {
            visionData.map(({ title, text }, index) => (
              <VisionCard key={index} title={title} text={text} />
            ))
          }
        </article>
      </div>
      <div className='w-full'>
        <img src={assets1.aboutbanner} alt="banner-img" className='h-full w-full' />
      </div>
    </section>
  )
}

export default AboutVision
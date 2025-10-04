import React from 'react'
import { assets1 } from './Assets/assets1'

const TextBanner = ({ heading, last }) => {
  return (
    <section className='sm:h-[50vh] h-[30vh] bg-no-repeat bg-cover bg-right bg-gradient-to- w-full flex justify-center items-center' style={{ backgroundImage: `url(${assets1.allpageHeadBanner})` }}>
      <h1 style={{ fontFamily: "Lora, sans-serif" }} className='md:text-4xl text-2xl font-semibold'>{heading} {last && <span className='text-blue-600'>{last}</span>}</h1>
    </section>
  )
}

export default TextBanner
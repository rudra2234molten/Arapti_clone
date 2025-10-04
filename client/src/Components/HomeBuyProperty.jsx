import React from 'react'
import Heading from './Heading'
import { assets } from './Assets/assets'
import ButtonBlue from './ButtonBlue'

const propertyPoints = [' Living rooms are pre-wired for Surround', ' Luxurious interior design and amenities', ' Nestled in the Buckhead']

const HomeBuyProperty = () => {
  return (
    <section className='bg-[#FFFAFA] w-full xl:px-20 px-5 py-10'>
      <Heading title='Looking For Buying  Property' subTitle=' Trusted Real estate aGENCY' postition='center' />
      <aside className='w-full flex flex-col lg:flex-row gap-5 my-10'>
        <article className='flex-1 flex flex-col gap-y-4 text-sm'>
          <p className='text-[#5E5F63]'>Browse our property listing and find your best With over 1 million+ homes for sale available on the website you with a house you will want to call home. </p>
          <article>
            {
              propertyPoints.map((point, index) => (
                <h6 key={index} className='flex gap-3 items-center text-[#0B2C3D]'><img src={assets.tikicon} alt="" />{point}</h6>
              ))
            }
          </article>
          <div className='w-full relative mt-2 sm:mt-0'>
            <img src={assets.buyimage} alt="buy-img" className='w-full' />
            <img src={assets.buyblueblackimg} alt="buy-img1" className='w-20 absolute -top-10 right-5' />
          </div>
        </article>
        <article className='flex-1 bg-[#F2F6F7] rounded-md sm:p-10 p-4'>
          <h1 className='lg:text-4xl text-2xl capitalize font-bold'>Enter for more inquiry</h1>
          <form method="post" className='flex flex-col gap-y-3 mt-5'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-[#5E5F63]' htmlFor="name">Name</label>
              <input required className='bg-white rounded-md focus:outline-gray-400 text-gray-700 w-full shadow-md p-2' type="text" name="name" id="name" placeholder='Enter your name' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-[#5E5F63]' htmlFor="Ph Number">Ph Number</label>
              <input required className='bg-white rounded-md focus:outline-gray-400 text-gray-700 w-full shadow-md p-2' type="tel" name="Ph Number" id="Ph Number" placeholder='Enter your number' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-[#5E5F63]' htmlFor="Message">Message</label>
              <textarea required className='bg-white rounded-md focus:outline-gray-400 text-gray-700 w-full shadow-md p-2' name="Message" id="Message"></textarea>
            </div>
            <ButtonBlue text='Submit' />
          </form>
        </article>
      </aside>
    </section>
  )
}

export default HomeBuyProperty
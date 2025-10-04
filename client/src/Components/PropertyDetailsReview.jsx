import React from 'react'
import PropertyDetailsHeading from './PropertyDetailsHeading'
import { FaRegStar } from 'react-icons/fa6'
import { IoIosStar } from 'react-icons/io'
import { RatingCard } from './PropertyDetails'

const PropertyDetailsReview = ({rating}) => {
  return (
    <aside>
      <PropertyDetailsHeading title='Property Review' />
      <div className='flex flex-col md:flex-row w-full md:gap-x-5 gap-y-16 mb-5'>
        <article className='text-center font-semibold md:w-[30%] w-full'>
          <h5 className='text-5xl font-bold'>{rating}</h5>
          <p>out of <span className='text-green-500'>5.0</span></p>
          <div className={`flex w-full relative`}>
            <div className='flex w-full absolute z-10 top-0'>
              {
                Array(5).fill(' ').map((_, index) => index < rating ? <span className='bg-transparent text-white border px-2 py-1 w-full flex justify-center items-center'><IoIosStar /></span> : <span className='bg-gray-100 text-gray-500 border px-2 py-1 w-full flex justify-center items-center'><FaRegStar /></span>)
              }
            </div>
            <span className={`absolute top-0 inline-block bg-green-500 h-[1.70rem] z-0`} style={{ width: `${(rating / 5) * 100}%` }}></span>
          </div>
        </article>
        <article className='grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 gap-3'>
          {
            Array(4).fill(' ').map(() => (
              <RatingCard rating={rating} />
            ))
          }
        </article>
      </div>
    </aside>
  )
}

export default PropertyDetailsReview
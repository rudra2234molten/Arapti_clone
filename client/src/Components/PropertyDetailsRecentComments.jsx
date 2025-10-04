import React from 'react'
import StarRating from './StarRating'
import PropertyDetailsHeading from './PropertyDetailsHeading'
import RatingCard2 from './RatingCard2'

const PropertyDetailsRecentComments = ({reviewData,rating}) => {
  return (
    <aside className='sm:pb-56 pb-28'>
      <PropertyDetailsHeading title='Recent Connents' />
      <div className='w-full'>
        <article className='flex flex-wrap justify-between w-full'>
          <div className='flex gap-5 items-center font-semibold text-gray-700'>
            <span>6 Reviews</span>
            <StarRating rating={4} />
            <span>(5 out of 5)</span>
          </div>
          <button className='text-red-500 text-sm font-semibold underline hover:text-green-500 transition-all duration-500'>Write a review</button>
        </article>
        <aside className='mt-5 flex flex-col gap-y-5'>
          {
            reviewData.map(({ img, name, date, review, text }, index) => (
              <RatingCard2 key={index} img={img} name={name} date={date} text={text} rating={rating} />
            ))
          }
        </aside>
      </div>
    </aside>
  )
}

export default PropertyDetailsRecentComments
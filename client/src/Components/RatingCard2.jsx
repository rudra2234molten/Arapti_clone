import React from 'react'
import StarRating from './StarRating'

const RatingCard2 = ({ img, name, date, text, rating }) => {
  return (
    <div className='flex flex-col sm:flex-row gap-5 py-5 px-2 items-start shadow-md rounded-xl cursor-pointer hover:scale-[1.01] transition-all duration-500 group hover:bg-blue-600'>
      <figure className='h-12 shrink-0 w-12 rounded-full overflow-hidden shadow-sm'>
        <img src={img} alt="profile" className='h-full w-full object-cover object-center' />
      </figure>
      <article className='flex flex-col gap-y-4 group-hover:text-white transition-all duration-500'>
        <div className='flex gap-5 items-start'>
          <div>
            <h1 className='text-lg font-bold'>{name}</h1>
            <h1 className='text-gray-600 font-semibold group-hover:text-white transition-all duration-500'>{date}</h1>
          </div>
          <StarRating rating={rating} />
        </div>
        <p className='md:text-sm text-xs text-gray-600 text-justify group-hover:text-white transition-all duration-500'>{text}</p>
      </article>
    </div>
  )
}

export default RatingCard2
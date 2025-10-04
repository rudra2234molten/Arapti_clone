import React from 'react'
import PropertyDetailsHeading from './PropertyDetailsHeading'

const PropertyDetailsDiscription = ({ bedroom, bathroom, squarfeet }) => {
  return (
    <>
      <article className='text-gray-700 text-sm'>
        <PropertyDetailsHeading title='Discription' />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum modi magnam illum quidem beatae adipisci vel neque. Distinctio vero qui ducimus aliquid maiores quasi, deserunt sint obcaecati illo nobis dolorem, culpa esse reiciendis alias explicabo blanditiis eligendi quae rem commodi eaque rerum odio. Tempora odit reiciendis facere similique dicta mollitia.</p>
      </article>
      <div className='flex flex-col md:flex-row'>
        <article className='flex items-center gap-x-2 sm:border-r px-4 py-2'>
          <span className='text-4xl'>🛏️</span>
          <div className='flex flex-col'>
            <span className='border rounded-full p-1.5 text-xs w-fit text-red-600 font-semibold'>{bedroom}</span>
            <span className='text-gray-700 font-semibold text-lg'>Bedroom</span>
          </div>
        </article>
        <article className='flex items-center gap-x-2 sm:border-r border-gray-200 px-4 py-2'>
          <span className='text-4xl'>🚘</span>
          <div className='flex flex-col'>
            <span className='border rounded-full p-1.5 text-xs w-fit text-red-600 font-semibold'>{bathroom}</span>
            <span className='text-gray-700 font-semibold text-lg'>Car Parking</span>
          </div>
        </article>
        <article className='flex items-center gap-x-2 sm:border-r border-gray-200 px-4 py-2'>
          <span className='text-4xl'>📐</span>
          <div className='flex flex-col'>
            <span className='border rounded-full p-1.5 text-xs w-fit text-red-600 font-semibold'>{squarfeet}</span>
            <span className='text-gray-700 font-semibold text-lg'>Squarfeet</span>
          </div>
        </article>
      </div>
    </>
  )
}

export default PropertyDetailsDiscription
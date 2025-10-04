import React from 'react'

const CategoryCard = ({ index, img, text, subText }) => {
  return (
    <div className='lg:w-[19rem] xl:w-[24rem] md:w-[22.5rem]'>
      <div className='w-full h-72 rounded-lg overflow-hidden shadow-md'>
        <img src={img} alt={`category-img${index}`} className='w-full h-full' />
      </div>
      <h6 className='text-center font-semibold text-2xl pt-2'>{text}</h6>
      <h6 className='text-center font-semibold text-2xl text-[#0B68F2] pt-2'>{subText}</h6>
    </div>
  )
}

export default CategoryCard
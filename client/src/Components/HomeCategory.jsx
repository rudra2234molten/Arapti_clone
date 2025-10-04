import React from 'react'
import Heading from './Heading'
import { assets } from './Assets/assets'
import CategoryCard from './CategoryCard'

const categoryData = [
  { img: assets.categoryimg1, text: 'Flats', subText: '13 Properties' },
  { img: assets.categoryimg2, text: 'Duplex Homes', subText: '15 Properties' },
  { img: assets.categoryimg3, text: 'Lands', subText: '16 Properties' },
]

const HomeCategory = () => {
  return (
    <section className='xl:px-20 px-5 py-10 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${assets.categorybgimg})` }}>
      <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 w-full md:items-end items-start'>
        <Heading title='Properties Categories' subTitle=' Trusted Real estate Care' postition='left' />
        <p className='text-[#5E5F63] lg:text-sm text-xs flex-1'>Our company provides a full range of services for the construction of private houses and cottages since 19</p>
      </div>
      <div className='flex mt-10 lg:gap-5 lg:justify-between justify-normal gap-2 flex-wrap w-full'>
        {
          categoryData.map(({ img, text, subText }, index) => (
            <CategoryCard key={index} img={img} text={text} subText={subText} />
          ))
        }
      </div>
    </section>
  )
}

export default HomeCategory
import React from 'react'
import Heading from './Heading'
import { assets } from './Assets/assets'
import BlogCard from './BlogCard'

const blogData = [
  { tag: 'Business', date: '02 Apr 2024', title: 'How to Prepare for your First Track his consumer-focused', subText: 'Business is the activity of making on cing or buying and selling pro', img: assets.blogimg1 },
  { tag: 'Business', date: '02 Apr 2024', title: 'How to Prepare for your First Track his consumer-focused', subText: 'Business is the activity of making on cing or buying and selling pro', img: assets.blogimg2 },
  { tag: 'Business', date: '02 Apr 2024', title: 'How to Prepare for your First Track his consumer-focused', subText: 'Business is the activity of making on cing or buying and selling pro', img: assets.blogimg3 },
  { tag: 'Business', date: '02 Apr 2024', title: 'How to Prepare for your First Track his consumer-focused', subText: 'Business is the activity of making on cing or buying and selling pro', img: assets.blogimg4 },
]

const HomeLetestBlogs = () => {
  return (
    <section className='xl:px-20 px-5 pt-10 md:pb-32 pb-20 bg-[#FFFAFA]'>
      <Heading title='Latest News & Blogs' subTitle=' Trusted Real estate aGENCY' postition='center' />
      <aside className='grid gap-5 lg:grid-rows-3 lg:grid-cols-2 grid-cols-1 mt-10 mb-32 w-full h-auto'>
        {
          blogData.map(({ tag, date, title, subText, img }, index) => (
            <BlogCard index={index} tag={tag} date={date} title={title} subText={subText} img={img} />
          ))
        }
      </aside>
    </section>
  )
}

export default HomeLetestBlogs
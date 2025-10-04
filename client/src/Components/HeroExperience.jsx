import React from 'react'
import { assets } from './Assets/assets'
import Heading from './Heading'
import ButtonBlue from './ButtonBlue'
import { useNavigate } from 'react-router-dom'

const HeroExperience = () => {
  const navigate = useNavigate()
  return (
    <section className='w-full xl:px-20 px-5 py-10 bg-[#F2F6F7] flex flex-col md:flex-row gap-5 md:gap-0'>
      <aside className='relative flex-1 flex md:block justify-center md:justify-normal'>
        <img src={assets.experiencebanner} alt="experience-banner" className='lg:w-[70%] w-[80%] drop-shadow-[0px_0px_10px_#94a3b8]' />
        <img src={assets.experiencetext} alt="experience-text" className='lg:w-[35%] w-[45%] absolute top-0 lg:right-[30%] md:right-[20%] right-[10%] shadow-[5px_5px_2px_blue]' />
      </aside>
      <article className='flex-1 flex flex-col lg:gap-y-8 gap-y-4'>
        <Heading title='Dream living Spaces Setting New Build' subTitle='Trusted Real estate Care' />
        <p className='text-[#5E5F63] lg:text-sm text-xs'>Transmds is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandi</p>
        <div className='text-[#26232A] gap-3 sm:gap-0 flex justify-between items-center w-full'>
          <article className='flex-1 flex flex-col sm:flex-row items-center lg:text-xl md:text-sm text-xs text-center sm:text-left font-semibold'>
            <img src={assets.housesicon} alt="house-icon" className='lg:w-32 md:w-24 w-20' />
            <p>Perfect Duplex Houses</p>
          </article>
          <article className='flex-1 flex flex-col sm:flex-row items-center lg:text-xl md:text-sm text-xs text-center sm:text-left font-semibold'>
            <img src={assets.friendlyicon} alt="friendly-icon" className='lg:w-32 md:w-24 w-20' />
            <p>Friendly Support Team</p>
          </article>
        </div>
        <div className='text-[#26232A] gap-10 flex justify-between items-center w-full'>
          <article className='flex-1'>
            <h6 className='lg:text-2xl md:text-xl mb-3 font-semibold'>Construction</h6>
            <p className='text-xs lg:text-base text-[#5E5F63]'>Curabitur vel auctor nibh. Curabitur
              egestas posuere mi, sed pulvinar ligula.</p>
          </article>
          <article className='flex-1'>
            <h6 className='lg:text-2xl md:text-xl mb-3 font-semibold'>Architecture</h6>
            <p className='text-xs lg:text-base text-[#5E5F63]'>Curabitur vel auctor nibh. Curabitur
              egestas posuere mi, sed pulvinar ligula.</p>
          </article>
        </div>
        <div className='flex items-center gap-5 w-fit'>
          <div onClick={() => {
            navigate('/about')
            window.scrollTo(0, 0)
          }} className='w-fit'>
            <ButtonBlue text='More About Us' />
          </div>
          <img src={assets.playbuttonicon} alt="" className='lg:w-20 md:w-14 w-20 cursor-pointer' />
        </div>
      </article>
    </section>
  )
}

export default HeroExperience
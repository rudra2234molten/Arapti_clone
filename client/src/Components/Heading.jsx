import React from 'react'
import { assets } from './Assets/assets'

const Heading = ({ title, subTitle, postition = 'left', text = 'black' }) => {
  return (
    <div className='flex flex-col lg:gap-y-8 gap-y-4 flex-1'>
      <h6 className={`text-[#0B68F2] uppercase text-xs ${postition === 'center' ? 'justify-center' : 'justify-start'} font-bold flex items-center gap-2`}><img src={assets.homeicon} alt="home-icon" /> {subTitle}</h6>
      <h1 className={`lg:text-4xl text-2xl  font-bold ${text === 'black' ? 'text-[#26232A]' : 'text-white'} capitalize ${postition === 'center' ? 'text-center' : 'text-left'}`} style={{ textShadow: '0px 1px 2px #26232A' }}>{title}</h1>
    </div>
  )
}

export default Heading
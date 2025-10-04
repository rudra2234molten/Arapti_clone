import React from 'react'
import { assets1 } from './Assets/assets1'

const BenifitCard = ({title,text}) => {
  return (
    <div className='flex shrink-0 lg:w-[25rem] sm:w-[20rem] w-[18rem] justify-center hover:shadow-xl items-center text-center flex-col gap-y-4 shadow-sm hover:bg-white transition-all duration-500 cursor-pointer rounded-md p-5'>
      <div className='h-14 w-14'>
        <img src={assets1.menanddolaricon} alt="men-icon" className='w-full h-full' />
      </div>
      <h6 className='font-bold text-lg'>{title}</h6>
      <p className='text-xs text-[#5E5F63]' style={{ fontFamily: "Nonito, sans-serif" }}>{text}</p>
    </div>
  )
}

export default BenifitCard
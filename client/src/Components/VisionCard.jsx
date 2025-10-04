import React from 'react'

const VisionCard = ({ title, text }) => {
  return (
    <div className='flex flex-col xl:gap-y-5 gap-y-3 bg-[#F8F7FC] xl:p-7 p-4 rounded-md shadow-lg cursor-pointer hover:bg-blue-600 hover:text-white group transition-all duration-700'>
      <h5 className='font-bold xl:text-4xl text-2xl capitalize transition-all duration-700'>{title}</h5>
      <p className='text-[#5E5F63] group-hover:text-white xl:text-xl text-base transition-all duration-700' style={{ fontFamily: "Nonito, sans-serif" }}>{text}</p>
    </div>
  )
}

export default VisionCard
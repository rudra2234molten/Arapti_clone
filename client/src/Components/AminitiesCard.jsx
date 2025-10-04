import React from 'react'

const AminitiesCard = ({ index, icon, title, text }) => {
  return (
    <div className='shadow-md rounded-xl p-5 w-full cursor-pointer group hover:bg-blue-600 transition-all duration-700'>
      <aside className='flex w-full justify-end items-center'>
        <div className='h-20 w-20'>
          <img src={icon} alt="icon" className='h-full w-full group-hover:shadow-lg group-hover:shadow-white rounded-full transition-all duration-700' />
        </div>
      </aside>
      <article className='flex flex-col gap-y-3'>
        <h6 className='text-blue-600 font-extrabold text-xl group-hover:text-white transition-all duration-700'>0{index + 1}</h6>
        <h1 className='text-lg font-bold group-hover:text-white transition-all duration-700'>{title}</h1>
        <p className='text-[#5E5F63] text-sm group-hover:text-white transition-all duration-700' style={{ fontFamily: "Nonito, sans-serif" }}>{text}</p>
      </article>
    </div>
  )
}

export default AminitiesCard
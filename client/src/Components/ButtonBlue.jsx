import React from 'react'

const ButtonBlue = ({ text, icon }) => {
  return (
    <button className='bg-[#0B68F2] w-fit flex items-center gap-2 xl:text-sm text-xs py-3 px-3 xl:px-6 rounded-md hover:bg-[#0851be] transition-all duration-500 text-white whitespace-nowrap'>{text}{icon && <img src={icon} alt="icon" className='xl:w-5 w-3' />}</button>
  )
}

export default ButtonBlue
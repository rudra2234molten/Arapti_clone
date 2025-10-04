import React from 'react'

const Heading2 = ({ title, text }) => {
  return (
    <section className='text-center flex flex-col gap-y-3 py-10'>
      <h1 className='text-[#26232A] font-bold lg:text-4xl md:text-3xl text-2xl' style={{ textShadow: '0px 1px 2px #26232A' }}>{title}</h1>
      <p className='text-[#5E5F63] lg:text-sm text-xs' style={{ fontFamily: "Nonito, sans-serif" }}>{text}</p>
    </section>
  )
}

export default Heading2
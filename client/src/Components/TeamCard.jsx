import React from 'react'

const TeamCard = ({ img, name, position, }) => {
  return (
    <div className='w-[17rem] bg-[#F8F7FC] rounded-md shadow-md cursor-pointer hover:scale-[1.01] hover:shadow-xl transition-all duration-500'>
      <aside className='w-full rounded-md overflow-hidden h-auto'><img src={img} alt="profile-team" className='w-full h-full object-cover object-top' /></aside>
      <article className='flex flex-col gap-y-1 p-2 text-center'>
        <h6 className='font-bold text-lg'>{name}</h6>
        <p className='text-sm text-[#1A1A1A]' style={{ fontFamily: "Nonito, sans-serif" }}>{position}</p>
      </article>
    </div>
  )
}

export default TeamCard
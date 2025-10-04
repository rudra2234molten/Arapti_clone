import { assets } from './Assets/assets'

const FeedbackCard = ({ index, img, name, postition, feedback }) => {
  return (
    <div className='rounded-xl hover:bg-blue-500 transition-all duration-700 cursor-pointer group sm:p-10 p-3 bg-white snap-center shrink-0 xl:w-[31.5rem] lg:w-[26rem] w-full shadow-lg'>
      <aside className='flex justify-between w-full items-center sm:mb-5 mb-2'>
        <figure className='flex items-center gap-4'>
          <div className='sm:h-14 rounded-full sm:w-14 h-11 w-11'>
            <img src={img} alt="profile" className='h-full w-full object-cover object-center' />
          </div>
          <div>
            <h6 className='text-[#26232A] transition-all duration-700 group-hover:text-white font-bold'>{name}</h6>
            <h6 className='text-[#0B68F2] transition-all duration-700 group-hover:text-black sm:text-sm text-xs font-semibold'>{postition}</h6>
          </div>
        </figure>
        <img src={assets.comaicon} alt="icon" className='group-hover:invert transition-all duration-700 w-10 sm:w-auto' />
      </aside>
      <p className='text-[#26232A] group-hover:text-white transition-all duration-700 sm:text-sm text-xs text-justify sm:leading-7 leading-5'>{feedback}</p>
    </div>
  )
}

export default FeedbackCard
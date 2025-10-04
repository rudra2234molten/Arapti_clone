import { assets } from './Assets/assets'

const BlogCard = ({ index, img, tag, title, date, subText }) => {
  return (
    <div className={`relative w-full group cursor-pointer ${index === 0 ? 'lg:row-span-3 lg:h-full h-[20rem] w-[50%]' : 'flex items-start lg:h-[11rem] h-[20rem] w-[50%]'}`}>
      <div className={`${index === 0 ? 'lg:w-full md:w-[50%] h-full w-[90%]' : 'w-[90%] h-full md:w-[50%]'} rounded-md overflow-hidden`}>
        <img src={img} alt={`blog-img${index}`} className='w-full h-full object-cover object-center' />
      </div>
      <article className={`bg-white group-hover:shadow-2xl ${index === 0 ? 'lg:w-[90%] w-[65%] h-fit' : 'w-[65%]'} flex flex-col gap-y-2 rounded-md sm:p-5 p-2 absolute shadow-md transition-all duration-300 ${index === 0 ? 'lg:-bottom-[15%] lg:top-auto lg:left-[5%] -right-0 top-[20%] lg:group-hover:-bottom-[18%] group-hover:-right-[3%]' : 'lg:-right-0 lg:top-[10%] -right-0 top-[20%] group-hover:-right-[3%]'}`}>
        <h5 className='flex items-center sm:gap-2 gap-1 text-[#5E5F63] sm:text-sm text-xs'><img src={assets.greenTagicon} alt="tagicon" /> {tag} - <img src={assets.greenCalender} alt="calendericon" /> {date}</h5>
        <h1 className='font-bold sm:text-lg text-sm text-[#26232A] sm:leading-6 leading-4'>{title}</h1>
        <p className={`sm:text-sm text-xs text-[#5E5F63] ${index !== 0 ? 'lg:hidden' : 'block'}`}>{subText}</p>
        <span className='flex sm:gap-2 gap-1 sm:text-sm text-xs items-center font-semibold'>Read More <img src={assets.greenarrowRight} alt="arrowicon" /></span>
      </article>
    </div>
  )
}

export default BlogCard
import { assets1 } from './Assets/assets1'
import { FaRegStar } from 'react-icons/fa6'
import ButtonBlue from './ButtonBlue'
import PropertyDetailsHeading from './PropertyDetailsHeading'

const PropertyDetailsProfileSide = ({ scocialLink }) => {
  return (
    <aside className='xl:w-[30%] w-full'>
      <div className='flex flex-col gap-y-4 text-center items-center p-5 rounded-xl border-gray-300 border'>
        <figure className='h-28 w-28 rounded-full overflow-hidden'>
          <img src={assets1.profile1} alt="profile" className='h-full w-full object-cover object-center' />
        </figure>
        <article className='text-gray-600 text-sm flex items-center flex-col gap-y-2'>
          <h1 className='lg:text-3xl md:text-2xl text-xl text-gray-800 font-bold'>Sonakshi Rao</h1>
          <h5>Reat estate broker</h5>
          <div className='flex gap-2 text-red-400 mb-3'>
            {Array(5).fill(' ').map(() => <FaRegStar />)}
          </div>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corporis ab consequatur voluptatibus, neque blanditiis!</p>
          <h5 className='text-gray-800 font-semibold'>Rohan@gmail.com</h5>
          <div className='flex gap-3 items-center'>
            {
              scocialLink.map((icon, index) => (
                <span className='text-xl p-2 cursor-pointer hover:bg-blue-500 transition-all duration-500 hover:text-white rounded-md border border-gray-200' key={index}>{icon}</span>
              ))
            }
          </div>
        </article>
      </div>
      <div className='p-5 border border-gray-200 rounded-xl mt-5'>
        <PropertyDetailsHeading title='Send Message' />
        <form method="post" className='flex flex-col gap-y-3 items-center'>
          <input required className='bg-gray-100 text-sm w-full py-1.5 px-2.5 rounded-sm text-gray-700 focus:outline-blue-300' type="text" name="fullname" id="fullname" placeholder='Full Name' />
          <input required className='bg-gray-100 text-sm w-full py-1.5 px-2.5 rounded-sm text-gray-700 focus:outline-blue-300' type="tel" name="phone" id="phone" placeholder='Phone Number' />
          <input required className='bg-gray-100 text-sm w-full py-1.5 px-2.5 rounded-sm text-gray-700 focus:outline-blue-300' type="email" name="email" id="email" placeholder='Email Address' />
          <textarea required className='bg-gray-100 text-sm w-full py-1.5 px-2.5 rounded-sm text-gray-700 focus:outline-blue-300' name="message" id="message" rows={4} placeholder='Write the message'></textarea>
          <ButtonBlue text='Send Meassage' />
        </form>
      </div>
    </aside>
  )
}

export default PropertyDetailsProfileSide
import React from 'react'
import { assets1 } from './Assets/assets1'
import { FaPlay } from 'react-icons/fa6'
import PropertyDetailsHeading from './PropertyDetailsHeading'

const PropertyDetailsVideo = ({videoRef,playVideo,videoPlay}) => {
  return (
    <aside>
      <PropertyDetailsHeading title='Video' />
      <div className='w-90 md:h-96 h-52 relative shadow-md rounded-md overflow-hidden cursor-pointer'>
        <video ref={videoRef} onClick={playVideo} src='https://res.cloudinary.com/dbm4zsa3j/video/upload/v1759147578/propertyvideo_bxjdih.mp4' poster={assets1.flat1img1} loop className='w-full h-full object-cover object-center'></video>
        <span onClick={playVideo} className={`bg-white ${videoPlay ? 'hidden' : 'block'} p-4 rounded-full absolute top-[43%] left-[44%] cursor-pointer text-blue-600 items-center`}><FaPlay /></span>
      </div>
    </aside>
  )
}

export default PropertyDetailsVideo
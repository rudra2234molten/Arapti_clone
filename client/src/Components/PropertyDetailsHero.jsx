import React, { useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

const PropertyDetailsHero = ({ flatPhotos, fadein, setFadein, prev, next, name, setFlatPhotos }) => {

  // useEffect(() => {
  //   let interval;
  //   if (window.screen.width <= 425) {
  //     interval = setInterval(next, 5000);
  //   }
  //   return () => clearInterval(interval)
  // }, [next])

  const handleImageClick = (index) => {
    if (index === 0) return;
    setFadein('FadeIn');
    setTimeout(() => setFadein(null), 500);
    const newPhotos = [...flatPhotos];
    const selectedImage = newPhotos.splice(index, 1)[0];
    setFlatPhotos([selectedImage, ...newPhotos]);
  }

  return (
    <div className='w-full h-[60vh] flex gap-3 justify-end sm:items-center items-end relative shadow-md'>
      {
        flatPhotos?.map((img, index) => (
          <div onClick={() => handleImageClick(index)} key={index} className={`${index === 0 ? `${fadein} h-full w-full absolute brightness-75` : 'sm:w-[5rem] sm:h-[6rem] w-[4rem] h-[5rem] cursor-pointer z-0  border-4 border-white block'} rounded-md overflow-hidden`}>
            <img src={img} alt="flat-image" className='h-full w-full object-cover object-center' />
            {index === 0 && <article className={`absolute md:max-w-[35%] w-[90%] z-10 lg:text-4xl sm:text-xl text-lg left-[5%] bg-black/40 shadow-white shadow-inner p-5 rounded-md md:bottom-[20%] bottom-[25%] font-bold text-gray-200`} style={{ textShadow: '0px 0px 5px #9ca3af' }}>
              <h1>{name}</h1>
              <p className='text-xs text-justify font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore excepturi ipsum ea voluptatibus. Omnis deserunt delectus provident voluptatem quaerat.</p>
            </article>}
          </div>
        ))
      }
      <div className='flex absolute justify-end gap-4 items-center 2xl:right-[5%] sm:bottom-[20%] bottom-0 w-full'>
        <span onClick={prev} className='bg-white p-2 rounded-full text-lg hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer'><FaArrowLeft /></span>
        <span onClick={next} className='bg-white p-2 rounded-full text-lg hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer'><FaArrowRight /></span>
      </div>
    </div>
  )
}

export default PropertyDetailsHero
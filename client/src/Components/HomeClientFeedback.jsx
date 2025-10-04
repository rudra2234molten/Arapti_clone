import Heading from './Heading'
import { assets } from './Assets/assets'
import FeedbackCard from './FeedbackCard'
import { useEffect } from 'react'

const clientFeedbackData = [
  {
    name: 'Cameron Williamson', feedback: 'The most advanced revenue than this. Iwill refer everyone I like Level more and more each day because it makes my easier.It really saves me time and effort.Level is exactly business has been lacking.', postition: 'Ceo & Founder', img: assets.feedbackprofile1
  },
  {
    name: 'Cameron Williamson', feedback: 'The most advanced revenue than this. Iwill refer everyone I like Level more and more each day because it makes my easier.It really saves me time and effort.Level is exactly business has been lacking.', postition: 'Ceo & Founder', img: assets.feedbackprofile2
  },
  {
    name: 'Cameron Williamson', feedback: 'The most advanced revenue than this. Iwill refer everyone I like Level more and more each day because it makes my easier.It really saves me time and effort.Level is exactly business has been lacking.', postition: 'Ceo & Founder', img: assets.feedbackprofile1
  },
  {
    name: 'Cameron Williamson', feedback: 'The most advanced revenue than this. Iwill refer everyone I like Level more and more each day because it makes my easier.It really saves me time and effort.Level is exactly business has been lacking.', postition: 'Ceo & Founder', img: assets.feedbackprofile2
  },

]

const HomeClientFeedback = () => {

  const prev = () => {
    const slideRef = document.getElementById('slider')
    slideRef.scrollLeft = slideRef.scrollLeft - 500
  }

  const next = () => {
    const slideRef = document.getElementById('slider')
    slideRef.scrollLeft = slideRef.scrollLeft + 500
  }

  // useEffect(() => {
  //   if (window.screen.width <= 768) {
  //     setInterval(next, 2000);
  //   }
  // }, [])

  return (
    <section className='py-10 xl:px-20 px-5 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${assets.homefeedbackbg})` }}>
      <Heading title='Find Client’s Feedback' subTitle=' Trusted Real estate aGENCY' postition='center' />
      <aside className='flex items-center sm:gap-5 gap-2 sm:my-10 my-5'>
        <span onClick={prev} className='bg-white lg:p-3 p-1.5 shrink-0 hidden sm:block shadow-md rounded-full hover:bg-blue-600 text-white cursor-pointer transition-all duration-300 group'><img src={assets.leftarrow} alt="prev-icon" className=' group-hover:invert xl:w-9 w-4' /></span>
        <div id='slider' className='flex gap-5 overflow-x-scroll py-1 snap-mandatory snap-x scroll-smooth'>
          {
            clientFeedbackData.map(({ name, feedback, postition, img }, index) => (
              <FeedbackCard key={index} name={name} feedback={feedback} img={img} postition={postition} />
            ))
          }
        </div>
        <span onClick={next} className='bg-white lg:p-3 p-1.5 shrink-0 hidden sm:block shadow-md rounded-full hover:bg-blue-600 text-white cursor-pointer transition-all duration-300 group'><img src={assets.leftarrow} alt="next-icon" className='rotate-180 group-hover:invert xl:w-9 w-4' /></span>
      </aside>
    </section>
  )
}

export default HomeClientFeedback
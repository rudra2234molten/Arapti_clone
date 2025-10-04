import { assets1 } from './Assets/assets1'
import BenifitCard from './BenifitCard'
import Heading2 from './Heading2'
import TextBanner from './TextBanner'

const benifitsData = [
  { title: 'Local Expertise and Market Knowledge', text: 'Our team has deep roots in the community and a thorough understanding of the local real estate market' },
  {
    title: 'Personalized and Client-Centric Service', text: "We believe in building lasting relationships by putting our clients' needs first.Our personalized approach ensures"
  },
  { title: 'Comprehensive Support and Resources', text: 'From initial consultation to closing and beyond, we provide comprehensive support throughout the entire real estate process.' },
]

const AboutBenifits = () => {
  return (
    <section className='bg-[#FFFAFA] w-full'>
      <TextBanner heading='About' last='Us' />
      <aside className=' xl:px-20 px-5 py-10 w-full'>
        <Heading2 title='What Benefits Do You Get Form Us' text='Work with Renting brokers who help you to get started with smart tools to.' />
        <div className='flex flex-wrap justify-center gap-5 w-full'>
          {
            benifitsData.map(({ title, text }, index) => (
              <BenifitCard key={index} title={title} text={text} />
            ))
          }
        </div>
      </aside>
    </section>
  )
}

export default AboutBenifits
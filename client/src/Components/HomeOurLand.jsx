import Heading from './Heading'
import ButtonBlue from './ButtonBlue'
import { assets } from './Assets/assets'
import LandCard from './LandCard'
import { landData } from './Assets/dataAsset'
import { useNavigate } from 'react-router-dom'


const HomeOurLand = () => {
  const navigate = useNavigate()
  return (
    <section className='py-10 xl:px-20 px-5 bg-gradient-to-t from-[#F0EFFB] to-white'>
      <aside className='w-full flex justify-between items-end'>
        <Heading title='Trusted Real estate Care' subTitle=' Trusted Real estate Care' />
        <div className='w-fit' onClick={() => {
          navigate('/properties')
          window.scrollTo(0, 0)
        }}>
          <ButtonBlue text='View More' icon={assets.rightarrow1} />
        </div>
      </aside>
      <aside className='grid lg:grid-rows-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:my-10 my-5'>
        {
          landData.map(({ id, img, name, location, squarft }, index) => (
            <LandCard id={id} index={index} img={img} location={location} name={name} squarft={squarft} />
          ))
        }
      </aside>
    </section>
  )
}

export default HomeOurLand
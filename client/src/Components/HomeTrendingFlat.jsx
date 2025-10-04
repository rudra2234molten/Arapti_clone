import Heading from './Heading'
import { assets } from './Assets/assets'
import TrendingFlatCard from './TrendingFlatCard'
import ButtonBlue from './ButtonBlue'
import { trendingFlatData } from './Assets/dataAsset'
import { useNavigate } from 'react-router-dom'

const HomeTrendingFlat = () => {
  const navigate = useNavigate()
  return (
    <section className='w-full xl:px-20 px-5 py-10 bg-[#FFFAFA] h-auto'>
      <Heading title='Trending Flat & Duplex' subTitle=' Trusted Real estate Care' postition='center' />
      <div className='grid lg:grid-rows-2 lg:grid-cols-2 grid-cols-1 w-full xl:gap-5 gap-2 my-10'>
        {
          trendingFlatData.slice(0, 4).map(({ id, img, name, price, bedroom, bathroom, squarfeet, location }, index) => (
            <TrendingFlatCard key={index} img={img} name={name} price={price} bedroom={bedroom} bathroom={bathroom} squarfeet={squarfeet} location={location} id={id} />
          ))
        }
      </div>
      <div className='flex justify-center items-center w-fit mx-auto' onClick={() => {
        navigate('/properties')
        window.scrollTo(0, 0)
      }}>
        <ButtonBlue text='View More' icon={assets.rightarrow1} />
      </div>
    </section>
  )
}

export default HomeTrendingFlat
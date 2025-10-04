import React from 'react'
import { landData, trendingFlatData } from './Assets/dataAsset';
import TrendingFlatCard from './TrendingFlatCard';
import LandCard from './LandCard';

const PropertyListsFlat = () => {
  return (
    <>
      <div className='grid lg:grid-rows-2 lg:grid-cols-2 grid-cols-1 w-full xl:gap-5 gap-2 my-10'>
        {
          trendingFlatData.map(({id, img, name, price, bedroom, bathroom, squarfeet, location }, index) => (
            <TrendingFlatCard key={index} id={id} img={img} name={name} price={price} bedroom={bedroom} bathroom={bathroom} squarfeet={squarfeet} location={location} />
          ))
        }
      </div>
      <aside className='grid lg:grid-rows-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mt-10 mt-5 pb-80'>
        {
          landData.map(({ img, location, name, squarft }, index) => (
            <LandCard index={index} img={img} location={location} name={name} squarft={squarft} />
          ))
        }
      </aside>
    </>

  )
}

export default PropertyListsFlat
import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trendingFlatData } from './Assets/dataAsset'
import { PiBathtubLight } from "react-icons/pi";
import { TbBus } from "react-icons/tb";
import { GiPoolTriangle } from "react-icons/gi";
import { assets1 } from './Assets/assets1';
import StarRating from './StarRating';
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlinePinterest } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import PropertyDetailsHero from './PropertyDetailsHero';
import PropertyDetailsProfileSide from './PropertyDetailsProfileSide';
import PropertyDetailsSec1 from './PropertyDetailsSec1';
import PropertyDetailsSec2 from './PropertyDetailsSec2';
import PropertyDetailsDiscription from './PropertyDetailsDiscription';
import PropertyDetailsHeading from './PropertyDetailsHeading';
import PropertyDetailsAmenities from './PropertyDetailsAmenities';
import PropertyDetailsFloorPlan from './PropertyDetailsFloorPlan';
import PropertyDetailsLocation from './PropertyDetailsLocation';
import PropertyDetailsVideo from './PropertyDetailsVideo';
import PropertyDetailsRecentComments from './PropertyDetailsRecentComments';
import PropertyDetailsReview from './PropertyDetailsReview';



export const RatingCard = ({ rating }) => {
  return (
    <div className='flex flex-col gap-y-3 w-full'>
      <div className='w-full flex gap-8 items-center'>
        <h6 className='text-gray-700 font-bold'>Property({rating})</h6>
        <StarRating rating={rating} />
      </div>
      <div className='w-full h-1  bg-gray-100 rounded-md'><div className='bg-green-500 transition-all duration-500 rounded-md h-1' style={{ width: `${(rating / 5) * 100}%` }}></div></div>
    </div>
  )
}

const amenitiesLabel = ['air conditioning', 'laundry', 'Window covering', 'microwave', 'outdoor shower', 'refrigerator', 'central heating', 'swimming poot', 'alrm system', 'washer', 'wifi', 'window coverings']

const reviewData = [
  { img: assets1.profile1, name: 'Rohan Raj', date: '25 jan 2024', review: 4, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero iste dolore consequuntur cupiditate illum ipsa quasi ipsum illo dolor deserunt voluptate inventore mollitia obcaecati vero, excepturi labore sit sint id. Laudantium sint facere a fugiat quos obcaecati voluptates in.' },
  { img: assets1.profile2, name: 'Kabir Sign', date: '25 jan 2024', review: 4, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero iste dolore consequuntur cupiditate illum ipsa quasi ipsum illo dolor deserunt voluptate inventore mollitia obcaecati vero, excepturi labore sit sint id. Laudantium sint facere a fugiat quos obcaecati voluptates in.' },
  { img: assets1.profile3, name: 'Raju Sribastav', date: '25 jan 2024', review: 4, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero iste dolore consequuntur cupiditate illum ipsa quasi ipsum illo dolor deserunt voluptate inventore mollitia obcaecati vero, excepturi labore sit sint id. Laudantium sint facere a fugiat quos obcaecati voluptates in.' },
]

const scocialLink = [<RiFacebookFill />, <FaXTwitter />, <IoLogoInstagram />, <AiOutlinePinterest />]


const PropertyDetails = () => {
  const { id } = useParams()
  const [fadein, setFadein] = useState(null)
  const [flatData, setFlatData] = useState({})
  const [flatPhotos, setFlatPhotos] = useState()
  const [floorImg, setFloorImg] = useState()
  const [videoPlay, setVideoPlay] = useState(false)
  const videoRef = useRef()

  useEffect(() => {
    const data = trendingFlatData.find(flat => flat.id == id)
    window.scrollTo(0, 0)
    setFlatData(data)
    setFlatPhotos(data.photos)
    setFloorImg(data?.florImg[0])
  }, [id])

  const playVideo = () => {
    setVideoPlay(!videoPlay)
    if (videoPlay) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  const prev = useCallback(() => {

    setFadein('FadeIn')
    setTimeout(() => {
      setFadein(null)
    }, 500);

    const data = flatPhotos[flatPhotos.length - 1]
    setFlatPhotos([data, ...flatPhotos])
    setFlatPhotos(prev => {
      const newArray = [...prev]
      newArray.pop()
      return newArray
    })

  }, [flatPhotos])

  const next = useCallback(() => {

    setFadein('FadeIn')
    setTimeout(() => {
      setFadein(null)
    }, 500);

    const data = flatPhotos[0]
    setFlatPhotos([...flatPhotos, data])
    setFlatPhotos(prev => {
      const newArray = [...prev]
      newArray.shift()
      return newArray
    })
  }, [flatPhotos])

  const { location, squarfeet, bathroom, bedroom, price, rating, name, size, florImg, heading } = flatData

  const propertiesDetailTags = [{ data: price, tag: 'Price' }, { data: id, tag: 'Property Id' }, { data: squarfeet, tag: 'Area Size' }, { data: squarfeet, tag: 'Land Area Size' }, { data: bedroom, tag: 'Rooms' }, { data: bathroom, tag: 'Wash Rooms' }, { data: bedroom, tag: 'Garage' }]

  const floorPlanLabel = [
    { icon: <PiBathtubLight />, label: 'total size', data: size },
    { icon: <TbBus />, label: 'bedroom', data: bedroom },
    { icon: <PiBathtubLight />, label: 'bathroom', data: bathroom },
    { icon: <GiPoolTriangle />, label: 'price', data: price },
  ]

  const locationLabel = [
    { label: 'Address', data: location },
    { label: 'City/Town', data: 'United States' },
    { label: 'Country', data: 'United States' },
    { label: 'Neighborhood', data: 'United States' },
    { label: 'Province/State', data: 'New Work' },
  ]

  return (
    <section className='w-full'>
      <PropertyDetailsHero flatPhotos={flatPhotos} fadein={fadein} setFadein={setFadein} prev={prev} next={next} name={name} setFlatPhotos={setFlatPhotos} />
      <section className='flex flex-col-reverse gap-y-5 xl:gap-y-0 xl:flex-row w-full xl:px-20 px-5 my-10 gap-[5%]'>
        <aside className=' flex flex-col gap-y-5 xl:w-[65%] w-full'>
          <PropertyDetailsSec1 />
          <PropertyDetailsSec2 price={price} location={location} heading={heading} />
          <PropertyDetailsDiscription bedroom={bedroom} bathroom={bathroom} squarfeet={squarfeet} />
          <aside>
            <PropertyDetailsHeading title='Properties Details' />
            <article className='grid md:grid-cols-2 grid-cols-1 w-full gap-x-5'>
              {
                propertiesDetailTags.map(({ data, tag }, index) => (
                  <h1 className='flex justify-between items-center border-b text-gray-600 border-gray-200 py-2' key={index}><span className='text-gray-900'>{tag}</span><span className='text-sm'>{data}</span></h1>
                ))
              }
            </article>
          </aside>
          <PropertyDetailsAmenities amenitiesLabel={amenitiesLabel} />
          <PropertyDetailsFloorPlan floorPlanLabel={floorPlanLabel} flatData={flatData} floorImg={floorImg} setFloorImg={setFloorImg} />
          <PropertyDetailsLocation locationLabel={locationLabel} />
          <PropertyDetailsVideo playVideo={playVideo} videoRef={videoRef} videoPlay={videoPlay} />
          <PropertyDetailsReview rating={rating} />
          <PropertyDetailsRecentComments rating={rating} reviewData={reviewData} />
        </aside>
        <PropertyDetailsProfileSide scocialLink={scocialLink} />
      </section>
    </section>
  )
}

export default PropertyDetails
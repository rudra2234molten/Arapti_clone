import PropertyDetailsHeading from './PropertyDetailsHeading'

const PropertyDetailsFloorPlan = ({ floorPlanLabel, setFloorImg, flatData, floorImg }) => {
  return (
    <aside>
      <PropertyDetailsHeading title='Floor Plan' />
      <aside className='w-full grid grid-cols-1 md:grid-cols-2 gap-y-5'>
        <div className='flex flex-col gap-y-3'>
          {
            floorPlanLabel.map(({ icon, label, data }, index) => (
              <h1 className='flex gap-2 items-center text-gray-600'><span className='text-lg'>{icon}</span><span className='capitalize'>{label}:</span><span>{data}</span></h1>
            ))
          }
        </div>
        <div className='flex flex-col gap-y-3'>
          <div className='flex justify-between'>
            <button onClick={() => setFloorImg(flatData.florImg[0])} className='bg-[#0B68F2] w-fit flex items-center gap-2 xl:text-sm text-xs py-1.5 px-2 xl:px-3 rounded-md hover:bg-[#0851be] transition-all duration-500 text-white whitespace-nowrap capitalize'>first floor</button>
            <button onClick={() => setFloorImg(flatData.florImg[1])} className='bg-[#0B68F2] w-fit flex items-center gap-2 xl:text-sm text-xs py-1.5 px-2 xl:px-3 rounded-md hover:bg-[#0851be] transition-all duration-500 text-white whitespace-nowrap capitalize'>second floor</button>
            <button onClick={() => setFloorImg(flatData.florImg[2])} className='bg-[#0B68F2] w-fit flex items-center gap-2 xl:text-sm text-xs py-1.5 px-2 xl:px-3 rounded-md hover:bg-[#0851be] transition-all duration-500 text-white whitespace-nowrap capitalize'>third floor</button>
          </div>
          <div className='w-full h-64 rounded-xl overflow-hidden shadow-[0px_0px_30px_#9ca3af]'>
            <img src={floorImg} alt="floor-img" className='h-full w-full object-cover object-center' />
          </div>
        </div>
      </aside>
    </aside>
  )
}

export default PropertyDetailsFloorPlan
import Heading2 from './Heading2'
import { assets1 } from './Assets/assets1'
import TeamCard from './TeamCard'

const teamData = [
  { img: assets1.teammember1, name: 'Jasmin Setty', position: 'Service Support' },
  { img: assets1.teammember2, name: 'Sumit Singh', position: 'Service Support' },
  { img: assets1.teammember3, name: 'John Powell', position: 'Service Support' },
  { img: assets1.teammember4, name: 'John Powell', position: 'Service Support' },
]

const AboutTeamMembers = () => {
  return (
    <section className='w-full xl:px-20 px-5 mt-10 sm:mb-56 mb-32'>
      <Heading2 title='Team Members' text='Here are some common property amenities that can be highlighted for real estate listings or developments:' />
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:justify-items-center grid-cols-1 xl:gap-x-6 gap-y-6 justify-items-center w-full'>
        {
          teamData.map(({ img, name, position }, index) => (
            <TeamCard key={index} img={img} name={name} position={position} />
          ))
        }
      </div>
    </section>
  )
}

export default AboutTeamMembers
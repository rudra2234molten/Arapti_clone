import React from 'react'
import HeroHome from '../HeroHome'
import HeroExperience from '../HeroExperience'
import HomeCategory from '../HomeCategory'
import HomeTrendingFlat from '../HomeTrendingFlat'
import HomePropertyLocation from '../HomePropertyLocation'
import HomeOurLand from '../HomeOurLand'
import HomeBuyProperty from '../HomeBuyProperty'
import HomeClientFeedback from '../HomeClientFeedback'
import HomeLetestBlogs from '../HomeLetestBlogs'

const Home = () => {
  return (
    <section>
      <HeroHome />
      <HeroExperience />
      <HomeCategory />
      <HomeTrendingFlat />
      <HomePropertyLocation />
      <HomeOurLand />
      <HomeBuyProperty />
      <HomeClientFeedback />
      <HomeLetestBlogs />
    </section>
  )
}

export default Home
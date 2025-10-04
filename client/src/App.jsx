import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <section className='w-full tracking-wide'>
      <NavBar />
      <div className='w-full'>
        <Outlet />
      </div>
      <Footer />
    </section>
  )
}

export default App
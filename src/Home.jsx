import React from 'react'
import HomeSection from './assets/HomeSection'
import Navbar from './assets/Navbar';
import JoinUsSection from './assets/JoinUsSection';
const Home = () => {
  return (
    <div className='homeSection'>
        <Navbar/>
      <HomeSection/>
      <JoinUsSection/>
    </div>
  )
}

export default Home

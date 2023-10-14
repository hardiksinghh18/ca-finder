import React from 'react'
import HomeSection from './assets/HomeSection'
import Navbar from './assets/Navbar';
import JoinUsSection from './assets/JoinUsSection';
import AllinOne from './assets/AllinOne';
const Home = () => {
  return (
    <div className='homeSection'>
        <Navbar/>
      <HomeSection/>
      <JoinUsSection/>
      <AllinOne/>
      
    </div>
  )
}

export default Home

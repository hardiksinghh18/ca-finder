import React from 'react'
import { NavLink } from 'react-router-dom'
import footerlogo from '../images/footerlogo.png'
import {FaFacebook,FaLinkedin} from 'react-icons/fa6'
import {FaInstagram,FaWhatsapp}  from 'react-icons/fa'

const Footer = () => {
  return (

    <footer  className='footer'>
      <div className='footer-content text-white p-16 flex flex-wrap justify-around '>
        <div className='w-1/6 flex flex-col gap-4'>
          <NavLink to={'/'}><img src={footerlogo} alt="" /></NavLink>
          <p>India's first platform dedicated to simplifying partner search</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='font-bold'>COMPANY </h4>
          <ul className='flex flex-col gap-2'>
            <a href=""><li>About</li> </a>
            <a href=""><li>Pricing</li> </a>
            <a href=""><li>Career</li> </a>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='font-bold'>SOLUTIONS </h4>
          <ul className='flex flex-col gap-2'>
            <a href=""><li>Search</li> </a>
            <a href=""><li>Connect</li> </a>
            <a href=""><li>Research</li> </a>
            <a href=""><li>Academy</li> </a>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='font-bold'>RESOURCES </h4>
          <ul className='flex flex-col gap-2'>
            <a href=""><li>Blogs</li> </a>
            <a href=""><li>Forms</li> </a>

          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='font-bold'>SUPPORT </h4>
          <ul className='flex flex-col gap-2'>
            <a href=""><li>Help</li> </a>
            <a href=""><li>Contact Us</li> </a>

          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='font-bold'>LEGAL </h4>
          <ul className='flex flex-col gap-2'>
            <a href=""><li>Privacy</li> </a>
            <a href=""><li>Terms</li> </a>
            <a href=""><li>Accesbility</li> </a>
          </ul>
        </div>
      </div>
      <hr />

      <div className='flex justify-between px-16 py-8 text-white'>
        <p>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>

        <div className='flex items-center gap-4 text-lg'>
          <a href=""><FaFacebook/>  </a>
          <a href=""><FaInstagram/></a>
          <a href=""><FaLinkedin/> </a>
          <a href=""><FaWhatsapp/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

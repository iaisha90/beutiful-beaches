import React from 'react'
import logo from '../assets/logo.png'
import { instagram, x, linkedin, facebook } from '../assets/icons'

const Footer = () => {
  return (
    <section id='footer'>
      <div className='h-50 bg-linear-to-b from-blue-950 to-black'>
      <div className='flex flex-row'>
        <div>
          <img src= {logo} alt="logo"
          className='w-[200px] h-[100px] mt-12 ml-8'
          />
        </div>
        <div className='flex flex-col justify-center-safe items-center-safe m-auto py-12'>
            <div>
              <h4
              className='text-white text-lg'
              >connect with us on:</h4>
            </div>
            <div className='flex flex-row'>
              <img src= {facebook} alt="facebook logo" 
              className='w-[40px] h-[40px] ml-2'
              />
              <img src= {instagram} alt="instagram logo"
              className='w-[40px] h-[40px] ml-2'
              />
              <img src= {x} alt="x logo"
              className='w-[40px] h-[40px] ml-2'
              />
              <img src= {linkedin} alt="linkedin logo" 
              className='w-[40px] h-[40px] ml-2'
              />
            </div>
            <p className='text-white mt-4'>
              copyright &copy; 2025
            </p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Footer
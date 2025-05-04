import React from 'react'
import { aboutBackground } from '../assets/images'

//about section

const About = () => {
  return (
    <section id='about'> 
      <div className='relative bg-cover bg-center'
    style={{backgroundImage:`url(${aboutBackground})`}}
    >
      <div className='absolute inset-0 backdrop-blur-md bg-white/30 z-0'/>
      <div className='relative z-10 p-6'>
      <div>
          <div className=' relative ml-180 mb-4'>
                <div className='absolute inset-0 bg-lime-400 -skew-x-12 transform z-0 w-32'></div>
                <div className='relative z-10 px-2 py-2 text-black'>
                <h1 className='text-2xl transform-none font-bold'>About Us</h1>
                </div>
            </div>
      </div>
      <div className='w-300 m-auto shadow-lg p-6 mb-8 bg-white'>
        <p>
        At Beautiful Beaches, we’re passionate about helping you discover the most breathtaking coastal destinations around the world. Whether you're planning a relaxing getaway, an adventurous escape, or just looking for some beachside inspiration — we’ve got you covered.
        We believe that travel should be seamless, exciting, and unforgettable. That’s why we curate the best beaches, offer helpful travel tips, and connect you with trusted services to make your journey stress-free from start to finish.
        Let’s make your next beach adventure one to remember. 
        </p>
      </div>
      </div>
    </div>
    </section>
  )
}

export default About
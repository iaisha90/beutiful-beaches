import React from 'react'
import backgroundImage from '../assets/images/backgroundImage.jpg'
import Button from '../components/Button'
import rightArrow from '../assets/icons/rightArrow.png'

const Hero = () => {
  return (
    <section id='hero' className='w-full flex flex-row justify-center max-container border-b border-slate-200'>
        <div className='flex flex-1 flex-col items-center'>
            <div className='relative mt-24'>
                <div className='absolute inset-0 bg-lime-400 skew-x-12 transform z-0'></div>
                <div className='relative z-10 px-2 py-2 text-black'>
                <h1 className='text-2xl transform-none font-bold'>Connecting you to beaches around the world!</h1>
                </div>
            </div>
            <div className='font-[inter] w-auto py-4 ml-[-80px]'>
                <p>Pack your gears and get your backpack ready, 
                    <br />there is so much beutiful beaches in the world to explore!.
                    <br />Have some courage, tap into your savings <br /> and get ready for some adventure.
                </p>
            </div >
            <div className='ml-[-380px] mt-8'>
            <Button 
            label= "visit gallery"
            iconURL={rightArrow}
            />
            </div>
        </div>
        <div className='flex flex-1 w-full h-full object-cover'>
            <img src= {backgroundImage} alt="beach picture"
            className='py-0.5'
            width={900}
            />
        </div>
    </section>
  )
}

export default Hero
import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='w-full px-2 py-2 flex justify-between items-center max-container bg-blue-950'>
   <div className=''>
   <img src={logo} alt="Logo" 
        width={70}
        height={70}/>
    </div>
    <div>
    <ul className='flex-1 flex justify-center items-center gap-16 font-[arial san serif]'>
    <a href="#hero" className=' text-white hover:text-lime-400 active:font-extrabold'>Home</a>
    <a href="#gallery" className=' text-white hover:text-lime-400 active:font-extrabold'>Gallery</a>
    <a href="#about" className=' text-white hover:text-lime-400 active:font-extrabold'>About Us</a>
    <Link to='/contact' className=' text-white hover:text-lime-400 active:font-extrabold'>Contact us</Link>
    </ul>    
    </div>     
    </nav>
  )
}

export default Nav
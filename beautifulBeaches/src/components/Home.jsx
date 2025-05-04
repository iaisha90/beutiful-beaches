import React from 'react'
import About from '../sections/About'
import Footer from '../sections/Footer'
import Gallery from '../sections/Gallery'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Nav from '../sections/Nav'
import ScrollTicker from '../sections/ScrollTicker'

const Home = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <Gallery />
        <Services />
        <About />
        <Footer />
        <ScrollTicker />
    </div>
  )
}

export default Home
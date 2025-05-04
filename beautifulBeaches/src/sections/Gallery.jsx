import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Card from '../components/card'
import  beaches  from '../constants'



const Gallery = () => {

  


  return (
    <section id='gallery' className='border-b border-slate-200 pb-14 mt-8'>
      <div className='py-2'>
      <div className=' relative mt-1 ml-180'>
                <div className='absolute inset-0 bg-lime-400 -skew-x-12 transform z-0 w-25'></div>
                <div className='relative z-10 px-2 py-2 text-black'>
                <h1 className='text-2xl transform-none font-bold'>Gallery</h1>
                </div>
            </div>
      </div>
        <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop = {true}
        navigation = {true}
        pagination = {{clickable: true}}
        centeredSlides = {true}
        >
          {beaches.map((beach)=> (
            <SwiperSlide  key = {beach.id}>
              <Card 
              imgURL = {beach.imgURL}
              beachName = {beach.beach}
              beachCountry = {beach.country}
              beachLocation = {beach.region}

        />
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  )
}

export default Gallery
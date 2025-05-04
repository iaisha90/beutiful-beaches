import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { travelIcon, insuranceIcon, hotelIcon } from '../assets/icons'

const Services = () => {
  return (
    <section id='services'>
      <div className='border-b border-slate-200 py-12'>
      <div>
      <div className=' relative mt-2 ml-180'>
                <div className='absolute inset-0 bg-lime-400 -skew-x-12 transform z-0 w-40'></div>
                <div className='relative z-10 px-2 py-2 text-black'>
                <h1 className='text-2xl transform-none font-bold'>Our Services</h1>
                </div>
            </div>
      </div>
    <div className='grid grid-cols-3 gap-4 p-6'>
      <ServiceCard 
      iconURL = {travelIcon}
      serviceName = {'Travel Solutions'}
      serviceDescription = {'we try our best to make your travel experience seamless and stress free by collaborating with travel agencies and taxi companies.'}
      />
      <ServiceCard 
      iconURL = {insuranceIcon}
      serviceName = {'Travel Insurance'}
      serviceDescription = {'Have a health condition? Our travel insurance provides full coverage for access to health care services in top notch health facilities'}
      />
      <ServiceCard 
      iconURL = {hotelIcon}
      serviceName = {'Hotel Bookings'}
      serviceDescription = {'Relax and unwind in highly rated hotels at affordable prices with mouth watering meals and room service'}
      />
    </div>
    </div>
    </section>
  )
}

export default Services
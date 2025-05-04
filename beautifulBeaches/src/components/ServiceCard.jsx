import React from 'react'

function ServiceCard (props) {
  return (
    <div className='p-6 bg-blue-950 rounded-md transition duration-300 ease-in hover:scale-102'>
        <div className='flex justify-center items-center'>
            <div className='w-8 bg-lime-400 rounded-full'>
            <img 
            width={48}
            height={48}
        src= {props.iconURL} alt="icon"/>
            </div>
        </div>
        <div className='mt-8 flex flex-col justify-center items-center'>
        <h1
        className='font-[montserrat] text-4xl text-white mb-4'
        > {props.serviceName} </h1>
        <p
        className='font-[montserrat] text-2xl text-white'
        > {props.serviceDescription} </p>
        </div>
    </div>
  )
}

export default ServiceCard
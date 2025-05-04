import React from 'react'

function Card(props) {
  return (
    <div className='flex flex-1 flex-col w-full bg-white shadow-md p-2 border-slate-400'>
      <img src= {props.imgURL} alt="name" 
      className='w-[350px] h-[280px]'
      />
      <h3
      className='font-[montserrat] text-2xl text-blue-950 m-auto'
      >{props.beachName}</h3>
      <h3
      className='font-[montserrat] text-2xl text-blue-950 m-auto'
      >{props.beachCountry}</h3>
      <p
      className='font-[montserrat] text-lg m-auto text-lime-700'
      >{props.beachLocation}</p>
    </div>
  )
}

export default Card
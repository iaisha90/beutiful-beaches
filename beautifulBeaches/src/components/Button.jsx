import React from 'react'

function Button (props){
  return (
    <button type='submit'
    className='bg-blue-950 hover:bg-blue-900 px-4 py-2 text-white rounded-full flex justify-center items-center gap-2
    hover:shadow-lg shadow-blue-950/50 active:border-blue-700
    '
    >{props.label}
    <img src= {props.iconURL} alt="icon"
    className='ml-2 w-5 h-5'
    />
    </button>
  )
}

export default Button
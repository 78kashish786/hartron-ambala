import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Card({topic, day, data}) {
  const Navigate= useNavigate();
  return (
    <div className='w-[300px] h-[200px] border  m-5 flex-col justify-between '>
        <h1 className='text-xl font-semibold'>{topic}</h1>
        <h2 className='text-3xl '>Day{day}</h2>
    </div>
  )
}

export default Card

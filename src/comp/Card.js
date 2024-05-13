import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Card({topic, day, data}) {
  const Navigate= useNavigate();
  return (
    <div className='w-[300px] h-[200px]  m-5 flex justify-between  bg-white rounded-xl p-3  bg-gradient-to-br from-amber-500 via-amber-200 to-neutral-50'>
        <div className='flex flex-col justify-between '>
        <h1 className='text-2xl font-semibold'>{topic}</h1>
        <h2 className='text-3xl '>Day{day}</h2>
        </div>
        <img src={require('../Assets/lof.png')} alt='imagess'/>
    </div>
  )
}

export default Card

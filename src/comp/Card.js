import React from 'react'

function Card({topic, day}) {
  return (
    <div className='w-[300px] h-[200px] border  m-5 flex-col justify-between '>
        <h1>{topic}</h1>
        <h2>Day{day}</h2>
    </div>
  )
}

export default Card

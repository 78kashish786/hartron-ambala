import React, { useState } from 'react'
import data from '../utils/data.js'
import Card from '../comp/Card.js';
import { useNavigate } from 'react-router-dom';
function Home() {


    const Data = data;

  return (
    <div className='px-16'>{
                    console.log(Data)
                }
        <div className='text-center  mt-10'>
        <div className='flex justify-center  items-center  gap-5 text-center mb-4 '>
            <img src={require('../Assets/html.png')} alt="image" className='h-[70px] '/>
            <h1 className='text-4xl font-semibold my-2'>{Data[0].course}</h1>
        </div>
        <p className='text-left text-xl '>{Data[0].course_desc}</p>
        </div>
        
        <div className='my-10'>
            <ul className='flex flex-wrap'>
                {
                    Data[0].course_chapters?.map((item,index)=>(
                        <li key={index} >
                            <Card topic={item.topic} day={item.day} />
                            </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Home

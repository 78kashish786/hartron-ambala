import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import InformationComp from './InformationComp'
import { GoDotFill } from 'react-icons/go'
function DetailComp ({ head, practice_set, nextState }) {
  const location = useLocation()
  const { state } = location;
  const params = useParams();
  const Navigate = useNavigate();
  // console.log("params:",params);
  const num = parseFloat(params.day);
  const alldata = nextState;
  // const handleNext = ()=>{
  //   Navigate(`/course/${nextState[`${num}`].day}`);
  // }
  console.log('State', state)

  return (
    <>
    <div className='flex  justify-end px-10'>
        <button className='p-2 border bg-black text-white  m-1  px-5 my-3 rounded-md' >Next</button>
        <button className='p-2 border bg-black text-white  m-1 px-5 my-3 rounded-md'>Prev</button>
    </div>
    <div className='md:grid grid-cols-3 md:px-16  '>
      <div className='px-5 py-10  '>
        <div className='w-full bg-gray-100 rounded-sm border p-5'>
          <h2>{head}</h2>
          <ul>
            {state.topic_list.map((item, index) => (
              <li
                key={index}
                className='flex gap-4 items-center my-2 text-[16px]'
              >
                <GoDotFill />
                {item.heading}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='col-span-2 mr-10 '>
        {state?.topic_list.map((item, index) => {
          const listData = item.list
          return (
            <InformationComp
              key={index}
              topic={item.heading}
              desc={item.topic_desc}
              list={item?.list}
              practice_set={state.practice_set}
            />
          )
        })}
        <h1 className='text-3xl px-5 font-semibold'>Practice Set</h1>
        <div className='p-2 border grid grid-cols-3 items-center   border-4-black rounded-xl my-5  ml-5 '>
          <div>
            <img src={require('../Assets/prac.png')} alt='text-practoce' />
          </div>
          <div className='col-span-2 '>
            <ul className='list-disc'>
              {
              state.practice_set.map((item,index)=>{
                return(
                  <li className='text-xl font-semibold  '>
                    {item.question}
                  </li>
                
                )
                
              })
            }
            </ul>
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DetailComp

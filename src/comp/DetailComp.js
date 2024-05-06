import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import InformationComp from './InformationComp';
import { GoDotFill } from "react-icons/go";
function DetailComp({head, practice_set}) {
  const location= useLocation();
  const {state}=  location;
  console.log(state);
  return (
    <div className='grid grid-cols-3 px-16 '>
      <div className='px-5 py-10  '>
          <div className='w-full bg-gray-100 rounded-sm border p-5'>
            <h2>{head}</h2>
            <ul>
{state.map((item,index)=>(
  <li key={index} className='flex gap-4 items-center my-2 text-[16px]'>
    <GoDotFill/>{item.heading}
  </li>
))}
            </ul>
            </div>
      </div>
      <div className='col-span-2 mr-10 '>
        {
          state?.map((item,index)=>{
            const listData= item.list;
            return(
              <InformationComp key={index} topic={item.heading} desc={item.topic_desc}  list={item?.list} practice_set={item.practice_set} />
            )
          })
        }
        <h1 className='text-3xl'>Practice Set</h1>
        <div className='p-2 border grid grid-cols-3 '>
          <div>
            <img src={require('../Assets/prac.png')} alt="text-practoce" />
          </div>
          <div className='col-span-2 bg-green-200'>
            {/* <ul>
            {
              practice_set.map((item,index)=>(
                <li key={index}>{item.question}</li>
              ))
            }</ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailComp

import React from 'react'
import { useLocation } from 'react-router-dom';
import InformationComp from './InformationComp';
import { GoDotFill } from "react-icons/go";
function DetailComp() {
  const location= useLocation();
  const {state}=  location;
  console.log(state);
  return (
    <div className='grid grid-cols-3 px-16 '>
      <div className='px-5 py-10  '>
          <div className='w-full bg-gray-100 rounded-sm border p-5'>
            <h2>{state.heading}</h2>
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
            return(
              <InformationComp key={index} topic={item.heading} desc={item.topic_desc}   />
            )
          })
        }
      </div>
    </div>
  )
}

export default DetailComp

import React from 'react'
import { MdFacebook } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
function Footer() {

  const List =[
    {
      head:'UseFull Links',
      list:[
        {name:"Home"},
        {name:"Home"},
        {name:"Home"},
        {name:"Home"},
        {name:"Home"},
        {name:"Home"},
        {name:"Home"},
      ]
    },
    {
      head:'Courses',
      list:[
        {name:"HTML"},
        {name:"HTML"},
        {name:"HTML"},
        {name:"HTML"},
        {name:"HTML"},
        {name:"HTML"},
        {name:"HTML"},
        {name:"HTML"},
        {name:"HTML"},

      ]
    },

  ]

  return (
    <>
    <div className='grid grid-cols-3 px-16  bg-black text-white border-b py-5 '> 
      <div className='text-center border-t-4 border-t-red-500 m-4 p-10 bg-[#373737]'>
        <div className='flex-col gap-3'>
          <h2 className='text-3xl font-semibold'>HIIT Ambala</h2>
          <p>Enroll now for a successful global career!
Hartron Building
Near Aggarsain Chowk, Ambala City
Haryana
Phone: +91-9996989217
Email: info@hiitambala.com</p>
          <ul className='flex justify-between items-center text-3xl mt-5 mx-10'>
            <li><MdFacebook/></li>
            <li><MdFacebook/></li>
            <li><MdFacebook/></li>
            <li><MdFacebook/></li>

          </ul>
        </div>
      </div>


{/*  */}
      <div className='text-white grid grid-cols-2 my-5 px-5'>
        {
          List.map((item,index)=>(
            <div key={index}>
              <h1>{item.head}</h1>
              <ul className='my-2'>
                {
                  item.list.map((item,index)=>{
                    return(
                      <li key={index} className='flex gap-1 items-center text-sm'><IoIosArrowForward/>{item.name}</li>
                    )
                  })
                }
              </ul>
              </div>
          ))
        }
      </div>

      {/* Subscribe button  */}
      <div className='my-auto'>
        <div className='w-[100%] bg-gray-200 flex justify-end rounded-full'>
          <input className='py-4 px-4 bg-gray-200 w-[100%] rounded-full'/>
          <button className='py-4 px-10 rounded-full bg-black text-white m-1'>Subscribe</button>
      </div>
    </div>

</div>











    <div className=' mx-auto text-center  w-[100vw] text-white text-[10px] bg-black mx-auto  py-3  '>
      <h1>@copyright 2024 HIIT Ambala, All Rights Reserveed</h1>
      <h1>Developed by Webroid Solutions</h1>
    </div>
    </>
  )
}

export default Footer

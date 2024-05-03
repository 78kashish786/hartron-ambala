import React from 'react'

function InformationComp({topic , desc , list}) {
  return (
    <div className='my-2  bg-white p-8 '>
        <h1  className='text-3xl font-semibold mb-5'>{topic}</h1>
        <p className='text-xl font-md' text-align="justify">{desc}</p>
        {/* <ul>
        {
            list?.map((item, index)=>{
                return(
                    <li key={index}>{item}</li>
                )
            })
        }
        </ul> */}
    </div>
  )
}

export default InformationComp
